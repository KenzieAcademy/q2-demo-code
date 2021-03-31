import React, { useEffect, useState } from "react";
import { loginRequest } from "../fetchRequests";

import { LOGIN, useStore } from "../store";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);

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

  //   useEffect(() => {
  //     window.addEventListener("message", handleMessage);
  //     return () => {
  //       window.removeEventListener("message", handleMessage);
  //     };
  //   }, []);

  //   function handleMessage(event) {
  //     console.log(event);
  //   }

  function handleGoogleLogin(e) {
    const googleWindow = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank",
      "width=500,height=500"
    );
    googleWindow.window.opener.onmessage = (event) => {
      //   googleWindow.close();
      console.log(event);
      if (!event || !event.data || !event.data.token) {
        // google login failure, dispatch an action here
        alert("Please log in to your Google account first");
        console.log("something happened");
        return;
      }
      dispatch({ type: LOGIN, payload: event.data });
    };
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
}

export default Login;
