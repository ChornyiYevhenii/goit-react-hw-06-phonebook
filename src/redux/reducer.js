import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contactsSlice";
import { setFilter } from "./filterSlice";

export const contactsReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => {return state.filter(contact => contact.id === action.payload)}
});
const filterInitialState = '';
export const filterReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => {
        return { ...state, filter: action.payload };
},  
});