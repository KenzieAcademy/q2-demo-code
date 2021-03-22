import React, { useEffect, useState } from "react";
import { loginRequest } from "../fetchRequests";

import { LOGIN, useStore } from "../store";

function Login(props){
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData })
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  useEffect(()=>{
      window.addEventListener('message', handleMessage)
      return ()=>{
          window.removeEventListener('message', handleMessage)
      }
  }, [])

  function handleMessage(event){
    console.log(event)
  }

  function handleGoogleLogin(e){
    window.open("https://socialapp-api.herokuapp.com/auth/google/login")
  }

  return (
    <>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={handleGoogleLogin}>google login</button>
    </>
  );
};

export default Login;
