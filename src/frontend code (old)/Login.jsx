import React,{useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <form className= "login-form" onSubmit={handleSubmit}>
                <label htmlFor = "email">Username or Email</label>
                <input value = {email} onChange={(e)=> setEmail(e.target.value)} type = "email" placeholder="Username or Email" id="email" name="email"/>
                <label htmlFor = "password">Password</label>
                <input value = {pass} onChange={(e)=> setPass(e.target.value)}type = "password" placeholder="Password" id="password" name="password"/>

                <button type = "submit">Login</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}