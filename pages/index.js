import Head from 'next/head'
import {useState} from 'react';

import EditContactForm from '../components/Forms/EditContactForm';
import Contacts from '../components/Forms/Contacts';
import classes from '../styles/Home.module.css'

export default function Home() {
  let initContacts =  [        
        {"name": "Олег Тинькофф", "phone": "+79156164839"},
        {"name": "Юрий Дудь", "phone": "+79156164849"}
    ];
  let [contacts, setContacts] = useState(initContacts);
  let [addition, setAddition] = useState(false);

  const turnOnAddition = () => {
    setAddition(true);
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

  return (
    <main className={classes.main}>
      <Contacts 
        contacts={initContacts}
        addition={addition}
        turnOnAddition={turnOnAddition}
        turnOffAddition={turnOffAddition}
        addContact={addContact}
        deleteContact={deleteContact}/>
      {/* <EditContactForm
        name='Олег Тинькофф'
        phone='+79156164839'/> */}
    </main>
  );
}
