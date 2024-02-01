"use client";

import styles from '../page.module.css'
import { useState } from "react";

export default function page() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm}>

               <input className={styles.emailInput} type='email' placeholder='Email'
                      onChange={(e) => {setEmail(e.currentTarget.value)}}></input>

               <input className={styles.passwordInput} type='password' placeholder='Password'
                      onChange={(e) => {setPassword(e.currentTarget.value)}}></input>
               
               <input type='submit' value='login' className={styles.submit}></input>
            </form>
          </div>
         )
}
