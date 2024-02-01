import styles from '../page.module.css'

export default function page() {
  return (
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm}>

               <input className={styles.emailInput} type='email' placeholder='Email'></input>

               <input className={styles.passwordInput} type='password' placeholder='Password'></input>
               
               <input type='submit' value='login' className={styles.submit}></input>
            </form>
          </div>
         )
}
