import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Table} from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
 
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handlerFilter = () => {
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
  }
  return (
    <Table>
      <tbody>
        <ContactItem
          contacts={handlerFilter()}
        />
      </tbody>
    </Table>
  );
};

