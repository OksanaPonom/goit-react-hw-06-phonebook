import Notiflix from 'notiflix';
import 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { List, Message } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selector';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { notiflix } from 'components/FormContact/FormContact';

export function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes((filter || '').toLowerCase())
    );
  };
  const deleteContact = (id, name) => {
    dispatch(removeContact(id));
    Notiflix.Notify.info(`Contact ${name} deleted`, notiflix);
  };

  return (
    <>
      {visibleContacts().length === 0 && contacts.length === 0 && (
        <Message>No contacts available.</Message>
      )}
      {visibleContacts().length === 0 && contacts.length !== 0 && (
        <Message>Contact not found</Message>
      )}

      {visibleContacts().length !== 0 && (
        <List>
          {visibleContacts().map(contact => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
              />
            );
          })}
        </List>
      )}
    </>
  );
}
