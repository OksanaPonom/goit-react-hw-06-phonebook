import { FormContact } from './FormContact/FormContact';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { MainTitle, Title } from './App.styled';

export function App() {
  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </div>
  );
}
