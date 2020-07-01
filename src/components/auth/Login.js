import React, { useState } from "react"
import Authorization from "./Authorization"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login } = Authorization()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();

    const userCreds = {
      "username": credentials.username,
      "password": credentials.password
    }

    login(userCreds)
      .then(() => props.history.push("/"))
  }

  return (
    <center>
    <form className="form--login" onSubmit={handleLogin} style={{backgroundColor:"#DCDCDC"}} >
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <fieldset>
        <label htmlFor="username"> Username </label>
        <input onChange={handleFieldChange} type="text"
          id="username"
          placeholder="Username"
          required="" autoFocus="" value={credentials.username}/>
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Password </label>
        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" autoFocus="" value={credentials.password}/>
      </fieldset>
      <fieldset>
        <button type="submit">
          Login
                    </button>
      </fieldset>
    </form>
    </center>
  )
}

export default Login;