import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Filter } from 'components/Filter/Filter';
// import { Box } from 'components/Box';

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
}