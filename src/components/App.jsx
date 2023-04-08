 
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";
import './App.css';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
handleSubmit = (contact) => {
    const isExist = this.state.contacts.find(item => item.name === contact.name)
    if (isExist) {
      alert('This name is already in contacts')
      return
    }
    this.setState(prevState => ({contacts:[...prevState.contacts, contact]}))
  }

  deleteContact = (id) => {
    this.setState(prevState => ({contacts:prevState.contacts.filter(contact => contact.id !== id)}))
  }

  handleFilterChange = (event) => {
    this.setState({filter:event.target.value})
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
  }

  render() {
    const contacts = this.getFilteredContacts();

     return (
      <>
        <div className="Container">
        <section title="Phonebook" className="Section">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        </section>
         
        <section title="Contacts" className="Section">
        <h2>Contacts</h2>
         <Filter handleInputChange={this.handleFilterChange} />
         <ContactsList contacts={contacts} handleDelete={ this.deleteContact } />
        </section>
        </div>
      </>
  );
  }
};