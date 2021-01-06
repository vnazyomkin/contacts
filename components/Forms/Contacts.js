import classes from './Contacts.module.scss'

export default function Contacts(props) {
    const contacts = props.contacts.map(contact => (
        <div className={classes.line}>
            <div className={classes.item}>{contact.name}</div>
            <div className={classes.item}>{contact.phone}</div>
            <a className={classes.item}>Редактировать</a>
        </div>
    ));
    return contacts;
}