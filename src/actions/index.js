import { ADD_REMINDER } from '../constants';

export const addReminder = () => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log('action in addReminder', action);
  return action;
}
