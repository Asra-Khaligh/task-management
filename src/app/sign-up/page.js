"use client";

import styles from '../page.module.css'
import { useState } from "react";

export default function loginPage() {

  const [name,  setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation,  setConfirmPassword] = useState('')

  
  const handleSubmit = async (e) =>
       {
        e.preventDefault();
        fetch('/register', 
              {
               method: 'post',
               body: JSON.stringify({
                                     name:name,
                                     email: email,
                                     password: password,
                                     password_confirmation: passwordConfirmation
                                    })
              })
       };


  return (
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>

               <input className={styles.topInput} id='name' type='email' placeholder='Name'
                      onChange={(e) => {setName(e.currentTarget.value)}}></input>

               <input className={styles.otherInputs} id='email' type='email' placeholder='Email'
                      onChange={(e) => {setEmail(e.currentTarget.value)}}></input>

               <input className={styles.otherInputs} id='password' type='password' placeholder='Password'
                      onChange={(e) => {setPassword(e.currentTarget.value)}}></input>
                
               <input className={styles.otherInputs} id='password_confirmation' type='password' placeholder='password confirmation'
                      onChange={(e) => {setConfirmPassword(e.currentTarget.value)}}></input>
               
               <input type='submit' value='sign up' className={styles.signUp}></input>

            </form>
          </div>
         )
}
