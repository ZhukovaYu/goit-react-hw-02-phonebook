import '../ContactsList/ContactsList.css';

export const ContactsList = ({ contacts, handleDelete }) => {
    return <ul className="ContactsList"> {contacts.map(contact =>
        <li className="ContactListItem"
            key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
                className="ContactsList-button"
                type='button'
                onClick={() => handleDelete(contact.id)}>delete</button>
        </li>)}
    </ul>
}
 
