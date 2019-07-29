import React, { Component } from 'react'
import { connect } from 'react-redux';
import getSeries  from './fetchseries';
const ReactHighcharts = require('react-highcharts/ReactHighstock');

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deSelectAll: false,
    };
  }
  
  componentDidMount() {
    //setInterval(()=>{this.props.dispatch(getSeries());},5000);
  }

  toggleButton(){
    this.setState((currentState) => ({
        deSelectAll: !currentState.deSelectAll, 
    }));
    let chart = this.refs.chart1.getChart();
    chart.legend.allItems.forEach(item => item.setVisible(this.state.deSelectAll, false));
  }

  render() {
    let config = {
      chart : {
        type: 'area'
      },
      title: {
          text: 'High Stock Chart'
      },
      xAxis: {
          range: 86400 * 1000 // 30 minutes
      },
      yAxis: {
          plotLines: [{
              value: 0,
              width: 2,
              color: 'blue'
          }]
      },
      plotOptions: {
        area: {
            stacking: 'normal',
            color: 'gray',
            lineWidth: 2,
            marker: {
                lineWidth: 2,
                lineColor: 'orange'
            },
            series : {
              events : {
                  legendItemClick : ((e) => {
                      let curState = e.target.visible ? 0 : 1;
                      let series  = this.refs.chart1.getChart().series;
                      let len = series.length;
                      
                      for(let i = 0; i < len; i++) {
                          if ( series[i].legendItem !== undefined && series[i] != e.target && series[i].visible )
                          curState++;
                      }
                      
                      if(curState != 0 && curState === len ){
                          this.setState({  ...this.state, deSelectAll: false} );
                      } 
                      else if(curState === 0){
                          this.setState({  ...this.state, deSelectAll: true} );
                      }
                      
                  })
                  
              }
          }
        
        },
      },
      series: [{
        data : [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }, { 
        data : [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }
    ],
      legend: {
      enabled: true
    },
    }
    return (
      <div>
        <ReactHighcharts config = {config} ref="chart1"/>
        <button onClick={ () => this.toggleButton() } >{ this.state.deSelectAll ?  'Select All' : 'Deselect All'}</button>
    </div>
    )
  }
}

export default connect(
  (series)=>(series)
)(MainApp)
