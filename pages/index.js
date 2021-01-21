import Head from 'next/head'
import {useState} from 'react';

import Contacts from '../components/Forms/Contacts';
import Modal from '../components/Modal/Modal';
import classes from '../styles/Home.module.css'

export default function Home(props) {
  const [contacts, setContacts] = useState(props.contacts);
  const [addition, setAddition] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modal, setModal] = useState(null);

  const createId = () => {
    return `f${(+new Date).toString(16)}`;
  };

  const turnOnAddition = () => {
    setAddition(true);
    setEditId(null);
  };

  const turnOffAddition = () => {
    setAddition(false);
  };

  const addContact = () => {
    alert('Новый контакт успешно добавлен');
  }

  const deleteContact = (id) => {
    alert(`Контакт "${contacts[id].name}" успешно удален`);
    closeModal();
  }

  const startToEdit = (id) => {
    setEditId(id);
    setAddition(false);
  }

  const cancelToEdit = (id) => {
    setEditId(null);
  }

  const showModal = (text, resolve, id) => {
    setModal({text, resolve, id});

  }

  const closeModal = () => {
    setModal(null);
  }

  const sendContact = (contact, id) => {
    const data = contacts.filter(c => c.id !== id);
    data.push({id: createId(),...contact});

    const editContact = async function(data) {
      const res = await fetch(process.env.API_URL + 'vnazemkin', {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    }
    //editContact(data);
  }

  return (
    <>
      <main className={classes.main}>
        <Contacts 
          contacts={contacts}
          addition={addition}
          editId={editId}
          turnOnAddition={turnOnAddition}
          turnOffAddition={turnOffAddition}
          addContact={addContact}
          startToEdit={startToEdit}
          cancelToEdit={cancelToEdit}
          showModal={showModal}
          closeModal={closeModal}
          sendContact={sendContact}/>
      </main>
      {modal ? <Modal text={modal.text} resolve={modal.resolve} submit={deleteContact} closeModal={closeModal} id={modal.id}/> : null}
    </>
  );
}

export async function getStaticProps() {
  const url = process.env.API_URL;
  const res = await fetch(url + 'vnazemkin');
  const user = await res.json();
  return {
    props: {
      contacts: user.contacts,
    },
  };
}
