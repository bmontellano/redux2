import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie} from 'sfcookies';


const reminder = (action) => {
  let {text, dueDate} = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter( reminder => reminder.id !== id);
  console.log('new reduced reminders --->', reminders)
  return reminders
}

const reminders = (state = [], action) => {
  state = read_cookie('reminders');
  console.log('reading cookies')
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state --->', reminders);
      bake_cookie('reminders', reminders);
      console.log('baking cookies')
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id)
      bake_cookie('reminders', reminders);
      console.log('deleting cookies');
      return reminders;
    default:
      return state;
  }
}

export default reminders;
