import { deleteContact } from 'Redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.contact}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
