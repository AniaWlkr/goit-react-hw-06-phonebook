import actionTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = newContact => ({
  type: actionTypes.ADD_CONTACT,
  payload: newContact,
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
