import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Name,
  Numbur,
  BtnDelete,
  BoxContactsList,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Name>{name}:</Name>
        <BoxContactsList>
          <Numbur>{number}</Numbur>
          <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </BtnDelete>
        </BoxContactsList>
      </ListItem>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
