import classes from './Contacts.module.scss'
import EditContactForm from './EditContactForm';

export default function Contacts(props) {
    const contacts = props.contacts.map( (contact, i) => (
        <>
            <div className={classes.line}>
                <div className={classes.item}>{contact.name}</div>
                <div className={classes.item}>{contact.phone}</div>
                <button 
                    type="button" 
                    className={[classes.item, classes.button].join(' ')} 
                    onClick={() => props.startToEdit(i)}
                    >Редактировать</button>
                <button type="button" className={[classes.item, classes.button].join(' ')} onClick={() => props.deleteContact(i)}>Удалить</button>
            </div>
            {props.editId === i ? <EditContactForm name={contact.name} phone={contact.phone} cancel={props.cancelToEdit}/> : null}
        </>
    ));
    return (
        <>
            {contacts}
            <button type="button" className={classes.button} onClick={props.turnOnAddition}>Добавить контакт</button>
            {props.addition ? <EditContactForm cancel={props.turnOffAddition}/> : null}
        </>
    );
}