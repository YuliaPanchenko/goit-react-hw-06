import React, { useEffect } from "react";
import css from "../ContactList/ContactList.module.css";
import { Contact } from "../Contact/Contact";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import contactListData from "../../data/contactList.json";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  useEffect(() => {
    if (!contacts.length) {
      contactListData.forEach((contact) => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch, contacts.length]);

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
    <ul className={css.contactList}>
      {filteredContacts().map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
