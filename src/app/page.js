import Welcome from './components/welcome'
import styles from './page.module.css'

export default function Home()
{
  return (
          <main className={styles.mymain}>
            <Welcome />

          </main>
         );
}
