import Contact from './Contact';

export default function Contacts(props) {
    return (
        <form>
            <Contact
                contact={props.contacts[0]}/>
        </form>
    );
}