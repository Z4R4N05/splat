// see SignupForm.js for comments

import React, { useState } from "react";
import Navbar from "../components/Navbar";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { useHistory } from "react-router-dom";
import Auth from "../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const history = useHistory();
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
      history.push("/");
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: "",
      password: "",
    });
  };

  if (Auth.loggedIn()) {
    history.push("/");
  }
  return (
    <>
      <Navbar />
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Your email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
