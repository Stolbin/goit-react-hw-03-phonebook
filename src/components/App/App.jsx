import React, { Component } from 'react';
import ContactsList from 'components/ContactsList';
import Phonebook from 'components/Phonebook';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import { Container, BoxPhonebook, BoxContacts } from './App.styled';
import SectionTitle from 'components/SectionTitle';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts?.length) {
      this.setState({ contacts: parseContacts });
      return;
    }
    this.setState({ contacts: this.state.contacts });
  }

  componentDidUpdate(prevState, prevProps) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    checkContact
      ? alert(`${name} is alreadi in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <Container>
        <BoxPhonebook>
          <SectionTitle title="Phonebook">
            <Phonebook onSubmit={this.addContact} />
          </SectionTitle>
        </BoxPhonebook>
        <BoxContacts>
          <SectionTitle title="Contacts">
            <Filter value={this.filter} onChange={this.changeFilter} />
            <ContactsList
              contacts={filterContacts}
              onDeleteContact={this.deleteContact}
            />
          </SectionTitle>
        </BoxContacts>
      </Container>
    );
  }
}

export default App;
