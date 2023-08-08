import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import 'notiflix';
import { Notify } from 'notiflix';
import { FormContact } from './FormContact/FormContact';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { MainTitle, Title, Message } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contactsList')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isAlreadyInContacts) {
      Notify.info(`${name} is already in contacts`);

      return;
    }
    setContacts(contacts => [newContact, ...contacts]);
    Notify.info(`Contact ${name} added`);
  };

  const removeContact = ({ idContact, name }) => {
    setContacts(contacts => {
      return contacts.filter(({ id }) => id !== idContact);
    });
    Notify.info(`Contact ${name} deleted`);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const getFilteredContacts = contacts => {
    const normalFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );

    return visibleContacts;
  };

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <FormContact addContact={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length === 0 && <Message>No contacts available.</Message>}
      {getFilteredContacts(contacts).length === 0 && contacts.length !== 0 && (
        <Message>Contact not found</Message>
      )}
      <Contacts
        contacts={getFilteredContacts(contacts)}
        removeContact={removeContact}
      />
    </div>
  );
}
