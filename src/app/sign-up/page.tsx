"use client";

import styles from '../page.module.css'
import { useState } from "react";
import { LoginData } from "../services/initial.service"

export default function loginPage() {

  const [name,  setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_confirmation,  setConfirmPassword] = useState<string>('')

  const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });

  return (
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm}>

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
