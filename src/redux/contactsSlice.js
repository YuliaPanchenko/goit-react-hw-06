import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = ((state = INITIAL_STATE), action)=> {
//   switch (action.type) {
//     case "contacts/add": {
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       }
//     }
//     case "contacts/delete": {
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload)
//       }
//     }
//     default:
//       return state;
//   }
// };

// export const addContacts = (payload) => {
//   return {
//     type: "contacts/add",
//     payload,
//   }
// }

// export const deleteContacts = (contactId) => {
//   return {
//     type: "contacts/delete",
//     payload: contactId,
//   }
// }
