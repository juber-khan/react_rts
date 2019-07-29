import { listSeries } from '../actions/index';
import  axios  from 'axios';

const getSeries = () => {
    return (dispatch) => axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          var dummy = [{
            data : [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
          }, { 
            data : [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
          }
        ];
          dispatch(listSeries(dummy));
      })
  }

export default getSeries;