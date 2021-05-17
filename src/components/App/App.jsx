import React, { Component } from 'react';
import styles from './App.module.css';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  componentDidMount() {
    // const contacts = JSON.parse(localStorage.getItem('contacts'));
    // if (contacts) this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
  }

  handleChange = event => {
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  // addContact = newContact => {
  //   if (contacts.find(contact => contact.name === newContact.name)) {
  //     alert(`${newContact.name} is already in contact`);
  //     return null;
  //   }

  //   this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.headTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

export default App;
