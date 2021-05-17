import React, { Component } from 'react';
import styles from './App.module.css';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

class App extends Component {
  componentDidMount() {
    // const contacts = JSON.parse(localStorage.getItem('contacts'));
    // if (contacts) this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
  }

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
