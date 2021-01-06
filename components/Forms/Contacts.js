import classes from './Contacts.module.scss'
import EditContactForm from './EditContactForm';

export default function Contacts(props) {
    const contacts = props.contacts.map(contact => (
        <div className={classes.line}>
            <div className={classes.item}>{contact.name}</div>
            <div className={classes.item}>{contact.phone}</div>
            <button type="button" className={classes.item}>Редактировать</button>
            <button type="button" className={classes.item}>Удалить</button>
        </div>
    ));
    return (
        <>
            {contacts}
            <button type="button" onClick={props.turnOnAddition}>Добавить контакт</button>
            {props.addition ? <EditContactForm cancel={props.turnOffAddition}/> : null}
        </>
    );
}