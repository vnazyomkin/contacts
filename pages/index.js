import Head from 'next/head'
import EditContactForm from '../components/Forms/EditContactForm';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <EditContactForm/>
    </main>
  );
}
