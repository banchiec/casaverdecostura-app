import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (  
    <div className="container-form">
 <img className="img-loginform" src="https://res.cloudinary.com/aleksmotin/image/upload/v1648415291/casaverde_logo_fsyri6.png" alt="casaverde-logo" border="0"></img>
      <form onSubmit={handleFormSubmission} className="signup__form">
        <label htmlFor="input-username"></label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Nombre del usuario"
          value={username}
          onChange={handleInputChange}
          required
        />
        <br/>

        <label htmlFor="input-password"></label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />
        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}
        <br/>
        <button className="button__submit" type="submit">
          Entrar
        </button>
      </form>
    </div> 
  );
}
