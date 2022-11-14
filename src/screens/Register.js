import React,{useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [address, setAdress] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }


    return (
        <div className="auth-form-container">
        <form className= "register-form" onSubmit={handleSubmit}>
            <label hmtlFor="name">Username</label>
            <input value={name} name="name" id="name" placeholder="Username"/>
            <label hmtlFor = "email">Email</label>
            <input value = {email} onChange={(e)=> setEmail(e.target.value)} type = "email" placeholder="example@gmail.com" id="email" name="email"/>
            <label htmlFor = "password">Password</label>
            <input value = {pass} onChange={(e)=> setPass(e.target.value)}type = "password" placeholder="*******" id="password" name="password"/>
            <label hmtlFor="address">Address</label>
            <input value={address} name="address" id="adress" placeholder="Address"/>
            <label hmtlFor="type">Type of User</label>
            <input value={type} name="type" id="type" placeholder="Buyer/Seller/Driver"/>
            <button type = "submit">Login</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}