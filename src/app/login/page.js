"use client";

import styles from '../page.module.css'
import { useState } from "react";

export default function loginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) =>
       {
        e.preventDefault();
        fetch('/login', 
              {
               method: 'post',
               body: JSON.stringify({
                                     email: email,
                                     password: password
                                    })
              })
       };


  return (
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm}  onSubmit={handleSubmit} >

               <input className={styles.topInput}  id='email' type='email' placeholder='Email'
                      onChange={(e) => {setEmail(e.currentTarget.value)}}></input>

               <input className={styles.otherInputs} id='password' type='password' placeholder='Password'
                      onChange={(e) => {setPassword(e.currentTarget.value)}}></input>
               
               <input type='submit' value='login' className={styles.submit}></input>
            </form>
          </div>
         )
}
