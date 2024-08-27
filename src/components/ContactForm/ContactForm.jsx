import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  newContact: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string().matches(
    phoneRegExp,
    "Phone number is not valid. You should enter 'xxx-xx-xx'"
  ),
  // .required("Required"),
});

const INITIAL_VALUES = {
  newContact: "",
  phoneNumber: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };
    const action = addContact(finalContact);
    dispatch(action);
  };

  const handleSubmit = (values, actions) => {
    const contactObj = {
      name: values.newContact,
      number: values.phoneNumber,
    };

    onAddContact(contactObj);
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h1>Phonebook</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={ContactValidationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.phoneName}>Name</span>
            <Field
              className={css.field}
              type="text"
              name="newContact"
              placeholder=""
            />
            <ErrorMessage
              className={css.error}
              name="newContact"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span className={css.phoneName}>Number</span>
            <Field
              className={css.field}
              type="tel"
              name="phoneNumber"
              placeholder=""
            />
            <ErrorMessage
              className={css.error}
              name="phoneNumber"
              component="span"
            />
          </label>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
