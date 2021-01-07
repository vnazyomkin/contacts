import Head from 'next/head'
import {useState} from 'react';

import EditContactForm from '../components/Forms/EditContactForm';
import Contacts from '../components/Forms/Contacts';
import classes from '../styles/Home.module.css'

export default function Home() {
  const initContacts =  [        
        {"name": "Олег Тинькофф", "phone": "+79156164839"},
        {"name": "Юрий Дудь", "phone": "+79156164849"}
    ];
  const [contacts, setContacts] = useState(initContacts);
  const [addition, setAddition] = useState(false);
  const [editId, setEditId] = useState(null);

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

  const deleteContact = (i) => {
    alert(`Контакт "${contacts[i].name}" успешно удален`);
  }

  const startToEdit = (id) => {
    setEditId(id);
    setAddition(false);
  }

  const cancelToEdit = (id) => {
    setEditId(null);
  }

  return (
    <main className={classes.main}>
      <Contacts 
        contacts={initContacts}
        addition={addition}
        editId={editId}
        turnOnAddition={turnOnAddition}
        turnOffAddition={turnOffAddition}
        addContact={addContact}
        deleteContact={deleteContact}
        startToEdit={startToEdit}
        cancelToEdit={cancelToEdit}/>
      {/* <EditContactForm
        name='Олег Тинькофф'
        phone='+79156164839'/> */}
    </main>
  );
}
