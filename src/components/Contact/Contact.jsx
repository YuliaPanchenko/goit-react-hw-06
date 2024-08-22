import React from "react";
import css from "../Contact/Contact.module.css";
import { IoIosPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.contactWrap}>
      <div className={css.contactElement}>
        <p className={css.contactName}>
          <IoIosPerson className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactNumber}>
          <MdLocalPhone className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        className={css.contactDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

// export default Contact;
