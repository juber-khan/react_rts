import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addMessage,
  addLog,
  removeMessage,
  removeLog
} from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: {
        message: '',
        log: ''
      }
    }
  }

  onInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState((state) => {
      const newInputs = state.inputs
      newInputs[name] = value
      return { inputs: newInputs }
    })
  }

 
  addMessage = () => {
    this.props.addMessage(this.state.inputs.message)
    this.setState((state) => {
      return { inputs: {
        message: '',
        log: state.inputs.log
      }}      
    })
  }

  addLog = () => {
    this.props.addLog(this.state.inputs.log)
    this.setState((state) => {
      return { inputs: {
        message: state.inputs.message,
        log: ''
      }}
    })
  }

  renderMessages = () => {
    return this.props.messages.map((msg, i) => (
      <section className="flex-row" style={this.card} key={i}>
        <p className="flex" style={this.margin}>{msg}</p>
        <button style={this.margin} onClick={() => this.props.removeMessage(msg)}>Remove</button>
      </section>
    ))
  }

  renderLogs = () => {
    return this.props.logs.map((log, i) => (
      <section className="flex-row" style={this.card} key={i}>
        <p style={this.margin} className="flex">{log}</p>
        <button style={this.margin} onClick={() => this.props.removeLog(log)}>Remove</button>
      </section>
    ))
  }

  render = () => (
    <React.Fragment>
      <h1>React Redux Starter</h1>
      <section className="flex-row">
        <section className="flex-column flex" style={this.padding}>
          <input type="text" 
                 name="message" 
                 placeholder="Message"
                 value={this.state.inputs.message} 
                 onChange={this.onInput} />
          <button className="align-start" style={this.marginTop} onClick={this.addMessage}>Add</button>
        </section>
        <section className="flex-column flex" style={this.padding}>
          <input type="text"
                 name="log"
                 placeholder="Log"
                 value={this.state.inputs.log}
                 onChange={this.onInput} />
          <button className="align-start" style={this.marginTop} onClick={this.addLog}>Add</button>
        </section>
      </section>
      <section className="flex-row wrap">
      <section className="flex-column flex" style={this.padding}>
      <h2>Messages</h2>      
      {this.props.messages && this.props.messages.length > 0 ? 
        this.renderMessages() :
        <h3>No Messages Available</h3>
      }
      </section>
      <section className="flex-column flex" style={this.padding}>
      <h2>Logs</h2>
      {this.props.logs && this.props.logs.length > 0 ? 
        this.renderLogs() :
        <h3>No Logs Available</h3>
      }
      </section>
      </section>
    </React.Fragment>
  )

   padding = {
    padding: '8px'
  }

  marginTop = {
    marginTop: '4px'
  }

  margin = {
    margin: '8px'
  }

  card = {
    padding: '12px',
    paddingTop: '2px',
    paddingBottom: '2px',
    margin: '4px',
    backgroundColor: '#eee'
  }

}


export default connect(
  ({ messages, logs }) => ({ messages, logs }),
  {
    addMessage,
    addLog,
    removeMessage,
    removeLog
  }
)(App)