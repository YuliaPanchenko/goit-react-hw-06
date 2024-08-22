const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = ((state = INITIAL_STATE), action)=> {
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    }
    case "contacts/delete": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      }
    }
    default:
      return state;
  } 
};


export const addContacts = (payload) => {
  return {
    type: "contacts/add",
    payload,
  }
}

export const deleteContacts = (contactId) => {
  return {
    type: "contacts/delete",
    payload: contactId,
  }
}