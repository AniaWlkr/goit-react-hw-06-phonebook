import React from 'react';
import styles from './ContactFilter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const ContactFilter = ({ value, handleChange }) => {
  return (
    <div>
      <label className={styles.label}>
        <span role="img" aria-label="loupe icon" className={styles.icon}>
          🔎
        </span>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(actions.changeFilter(event.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
