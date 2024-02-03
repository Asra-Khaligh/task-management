"use client";

import styles from '../page.module.css'
import { useState } from "react";
import { FormData } from "../services/initial.service"

export default function loginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleSubmit = async (e) =>
       {
        e.preventDefault();
        
       };

  return (
          <div className={styles.loginFormContainer}>
            <form className={styles.loginForm}  onSubmit={handleSubmit} >

               <input className={styles.topInput} id='email' type='email' placeholder='Email'
                      onChange={(e) => {setEmail(e.currentTarget.value)}}></input>

               <input className={styles.otherInputs} id='password' type='password' placeholder='Password'
                      onChange={(e) => {setPassword(e.currentTarget.value)}}></input>
               
               <input type='submit' value='login' className={styles.submit}></input>
            </form>
          </div>
         )
}
