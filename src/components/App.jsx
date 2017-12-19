import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      dueDate:''
    }
  }

  addReminder() {
    console.log("This changes the state of dueDate --->", this.state.dueDate)
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    console.log('deleting in app --->', id);
    console.log('this.props --->', this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className='list-item'>
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className='list-item delete-button'
                  onClick={() => this.deleteReminder(reminder.id)}
                  >
                    &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return (
      <div className="App">
        <div className="title">
          Oh, The Reminders
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="blah blah blah"
              onChange={event => this.setState({text: event.target.value})}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        { this.renderReminders() }
        <div
          className='btn btn-danger'
          onClick={() => this.props.clearReminders()}
          >
            <i>Clear Reminders</i>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state --->', state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps,  { addReminder, deleteReminder, clearReminders } )(App);
