import axios from "axios"

export interface LoginData 
{
  email: string;
  password: string;
}

export interface SignupData
{
  name: string;
  email: string;
  password: string;
  password_confirmation:  string;
}