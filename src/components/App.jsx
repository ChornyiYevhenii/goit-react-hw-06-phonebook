import { useState, useEffect} from 'react';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    if (
      contacts.some(item => {
        return item.name === contact.name;
      })
    ) {
      alert('Contact with this name already exist!');
      return;
    }
    if (
      contacts.some(item => {
        return item.number === contact.number;
      })
    ) {
      alert('This number is already in base!');
      return;
    }

    setContacts(contacts => [...contacts, contact]);

  };

  const deleteContact = contactId => {

    setContacts(contacts => contacts.filter(({ id }) => id !== contactId))

  };


  const handleSetFilterValue = ({ target: { value } }) => {

    setFilter(value);
  };

 const handleFilterContact = () => {
    return contacts
      .filter(contact => {
        return (
          contact.name
            .toLowerCase()
            .includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
        );
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {setContacts(savedContacts)}
  }, []
  );


  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <ContactFilter
              value={filter}
              onFilter={handleSetFilterValue}
            />
            <ContactList
              contacts={handleFilterContact()}
              onDelete={deleteContact}
            />
          </Section>
        )}
      </Layout>
    );
  }


