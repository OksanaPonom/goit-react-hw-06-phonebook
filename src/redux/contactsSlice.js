import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { contactList } from './InitialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactList },
  reducers: {
    addContact: (state, action) => {
      const { name, number, id } = action.payload;
      state.contactList.push({ name, number, id });
    },
    removeContact: (state, action) => {
      const index = state.contactList.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contactList.splice(index, 1);
      }
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;
