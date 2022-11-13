import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers } from "../api/Users-Data";
import { useUserContext } from "../contexts/user";

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { user, setUser } = useUserContext();
  const users = getUsers();

  function handleSubmit(e) {
    e.preventDefault();
    let validUser = users.find(user => user.username === email && user.password === pass );
    if (validUser) {
      setUser(validUser);
    }
  }

  if (user) {
    return <Navigate to="/" />
  }

  return (
    <div className="login-container">
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Username or Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username or Email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
    </div>
  )
}