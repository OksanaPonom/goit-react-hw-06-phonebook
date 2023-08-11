import PropTypes from 'prop-types';
import {
  ListItem,
  Name,
  Number,
  Button,
  TrashIcon,
} from './ContactItem.styled';
export function ContactItem({ contact, deleteContact }) {
  return (
    <ListItem>
      <p>
        <Name>{contact.name}:&nbsp;</Name>
        <Number>{contact.number}</Number>
      </p>
      <Button
        type="button"
        onClick={() => deleteContact(contact.id, contact.name)}
      >
        <TrashIcon />
      </Button>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
