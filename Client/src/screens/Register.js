import React,{useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { User } from "../api/Objects"
import { addUser, getNextId, getUsers} from "../api/Users-Data";

export default function RegisterScreen(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [address, setAdress] = useState('');
    const [type, setType] = useState('');
    const [accountCreated, setCreated] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        let page = null
        if (type == "Seller") page = []
        let newUser = new User(name,email,pass,String(getNextId()),type,null,page,null,null,false)
        addUser(newUser)
        setCreated(true)
      }
      
    if (accountCreated){
      return <Navigate to="/login" />
    }

    return (
        <div className="auth-form-container">
        <form className= "register-form" onSubmit={handleSubmit}>
            <label hmtlFor="name">Username</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} name="name" id="name" placeholder="Username"/>
            <label hmtlFor = "email">Email</label>
            <input value = {email} onChange={(e)=> setEmail(e.target.value)} type = "email" placeholder="example@gmail.com" id="email" name="email"/>
            <label htmlFor = "password">Password</label>
            <input value = {pass} onChange={(e)=> setPass(e.target.value)}type = "password" placeholder="*******" id="password" name="password"/>
            <label hmtlFor="address">Address</label>
            <input value={address} onChange={(e)=> setAdress(e.target.value)} name="address" id="adress" placeholder="Address"/>
            <label hmtlFor="type">Type of User</label>
            <input value={type} onChange={(e)=> setType(e.target.value)} name="type" id="type" placeholder="Buyer/Seller/Driver"/>
            <button type = "submit">Create Account</button>
        </form>
        <Link to="/login"><button className="link-btn">Already have an account? Login here.</button></Link>
    </div>
    )
}