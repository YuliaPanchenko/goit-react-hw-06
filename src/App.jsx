import { useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactListData from "../src/data/contactList.json";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setFilterValue } from "./redux/filtersSlice";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  useEffect(() => {
    if (!contacts.length) {
      contactListData.forEach((contact) => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch]);

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    const action = setFilterValue(value);
    dispatch(action);
  };

  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };
    const action = addContact(finalContact);
    dispatch(action);
  };

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const filteredContacts = () => {
    const result = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
    console.log(result);

    return result;
  };

  return (
    <>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList
        contactListData={filteredContacts()}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
