import Head from 'next/head'
import {useState} from 'react';

import EditContactForm from '../components/Forms/EditContactForm';
import Contacts from '../components/Forms/Contacts';
import styles from '../styles/Home.module.css'

export default function Home() {
  let initContacts =  [        
        {"name": "Олег Тинькофф", "phone": "+79156164839"},
        {"name": "Юрий Дудь", "phone": "+79156164849"}
    ];
  let [contacts, setContacts] = useState(initContacts);
  return (
    <main className={styles.main}>
      {/* <Contacts contacts={contacts}/> */}
      <EditContactForm
        name='Олег Тинькофф'
        phone='+79156164839'/>
    </main>
  );
}
