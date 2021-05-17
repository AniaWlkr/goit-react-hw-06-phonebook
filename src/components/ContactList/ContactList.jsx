import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import ContactFilter from '../ContactFilter/ContactFilter';

const ContactList = ({ contacts, handleDelete }) => (
  <div className={styles.section}>
    <ContactFilter />
    {contacts.length ? (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.item}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => handleDelete(contact.id)}
              className={styles.button}
            >
              Delete{' '}
              <span role="img" aria-label="delete icon">
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.notification}>
        <span role="img" aria-label="sad face icon">
          😔
        </span>{' '}
        No name in Phonebook
      </p>
    )}
  </div>
);

ContactList.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
};

const filteredContacts = (contacts, filter) => {
  return filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      )
    : contacts;
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  return {
    contacts: filteredContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: contactId => dispatch(actions.deleteContact(contactId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
