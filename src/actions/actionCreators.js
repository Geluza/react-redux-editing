import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CHANGE_EDIT_SERVICE_FIELD, RESET_SERVICE_FIELD, CHANGE_FILTER_FIELD } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function editService(id, name, price) {
    return {type: EDIT_SERVICE, payload: {id, name, price}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function changeEditServiceField(id) {
    return {type: CHANGE_EDIT_SERVICE_FIELD, payload: {id}};
}

export function resetServiceField() {
    return {type: RESET_SERVICE_FIELD};
}

export function changeFilterField(value) {
    return {type: CHANGE_FILTER_FIELD, payload:{value}}
}