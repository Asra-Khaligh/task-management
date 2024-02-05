import Link from 'next/link'
import styles from '../page.module.css'

export default function Welcome()
{
  return (
          <div className={styles.homeContainer}>
            <div className={styles.welcomeContainer}>
                <p>Welcome to Task Management</p>
            </div>

            <div className={styles.logSignContainer}>  

                <button className={styles.signLog}>
                  <Link href="../sign-up" >sign up </Link>      
                </button>

                <button className={styles.signLog}>
                  <Link href="../login" >log in</Link>
                </button>            
            </div>
          </div>
         )
}