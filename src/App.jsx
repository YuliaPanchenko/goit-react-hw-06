import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactListData from "../src/data/contactList.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = window.localStorage.getItem("contactValue");
    // return storedContacts ? JSON.parse(storedContacts) : contactListData;
    if (storedContacts) {
      return JSON.parse(storedContacts);
    } else {
      return contactListData;
    }
  });
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterValue(value);
  };

  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };
    setContacts([finalContact, ...contacts]);
    console.log(contact);
    console.log(finalContact);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
    console.log(contactId);
  };

  useEffect(() => {
    window.localStorage.setItem("contactValue", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
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
