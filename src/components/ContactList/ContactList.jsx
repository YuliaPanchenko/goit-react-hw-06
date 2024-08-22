import React from "react";
import css from "../ContactList/ContactList.module.css";
import { Contact } from "../Contact/Contact";

const ContactList = ({ contactListData, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contactListData.map((contact) => {
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
