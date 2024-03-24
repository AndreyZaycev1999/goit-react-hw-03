import css from "./Contact.module.css";

const Contact = ({ contactUser, onDeleteContact }) => {
  return (
    <li className={css.contact_item}>
      <div>
        <p>{contactUser.name}</p>
        <p>{contactUser.number}</p>
      </div>

      <button type="button" onClick={() => onDeleteContact(contactUser.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
