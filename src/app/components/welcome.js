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

                <Link href="../sign-up" className={styles.signLog}>sign up </Link>      

                <Link href="../login" className={styles.signLog}>log in</Link>
            
            </div>
          </div>
         )
}
