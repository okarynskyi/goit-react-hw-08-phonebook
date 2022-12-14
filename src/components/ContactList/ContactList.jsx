import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactList.module.css'; 

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
      return result
    });
    return filterContacts;
  };
  const filteredContacts = getFilterContacts();

  const elements = filteredContacts.map(({ name, number, id }) => {
        return <li key={id} className={css.list}>{name}: {number}
            <button onClick={() => dispatch(deleteContact(id))} className={css.list_button}>Delete</button>
        </li>
  })
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ul>{elements}</ul>}
    </div>
  )  
}
