import {CHANGE_EDIT_SERVICE_FIELD, CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELD} from '../actions/actionTypes'

const initialState = {
  fields: {
      name: '',
      price: '',
  },
  edit: {
      id: '',
      isEdit: false,
  }
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, fields: {...state.fields, [name]: value}};
    case CHANGE_EDIT_SERVICE_FIELD:
      const {id} = action.payload;
      return {...state, edit: {id, isEdit: true}};
    case RESET_SERVICE_FIELD:
       return initialState;
    default:
      return state;
  }
}