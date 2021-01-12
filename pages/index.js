import Head from 'next/head'
import {useState} from 'react';

import Contacts from '../components/Forms/Contacts';
import Modal from '../components/Modal/Modal';
import classes from '../styles/Home.module.css'

export default function Home() {
  const initContacts =  [        
        {"name": "Олег Тинькофф", "phone": "+79156164839"},
        {"name": "Юрий Дудь", "phone": "+79156164849"}
    ];
  const [contacts, setContacts] = useState(initContacts);
  const [addition, setAddition] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modal, setModal] = useState(null);

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

  return (
    <>
      <main className={classes.main}>
        <Contacts 
          contacts={initContacts}
          addition={addition}
          editId={editId}
          turnOnAddition={turnOnAddition}
          turnOffAddition={turnOffAddition}
          addContact={addContact}
          startToEdit={startToEdit}
          cancelToEdit={cancelToEdit}
          showModal={showModal}
          closeModal={closeModal}/>
        {/* <EditContactForm
          name='Олег Тинькофф'
          phone='+79156164839'/> */}
      </main>
      {modal ? <Modal text={modal.text} resolve={modal.resolve} submit={deleteContact} closeModal={closeModal} id={modal.id}/> : null}
    </>
  );
}
