import React, { useState } from "react"
import Authorization from "./Authorization";

const Register = props => {
  const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", username: "", password: "" });
  const { register } = Authorization()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRegister = e => {
    e.preventDefault();

    const newCustomer = {
      "first_name": credentials.firstName,
      "last_name": credentials.lastName,
      "email": credentials.email,
      "username": credentials.username,
      "password": credentials.password,
    }

    register(newCustomer)
    .then(() => props.history.push("/"))
  }

  return (
      <center>
    <form className="form--login" onSubmit={handleRegister} style={{backgroundColor:"#DCDCDC"}} >
      <h1 className="h3 mb-3 font-weight-normal">Register to use Notch-List</h1>
      <fieldset>
        <label htmlFor="firstName"> First Name </label>
        <input onChange={handleFieldChange} type="text"
          id="firstName"
          placeholder="First Name"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="lastName"> Last Name </label>
        <input onChange={handleFieldChange} type="text"
          id="lastName"
          placeholder="Last Name"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="email"> Email </label>
        <input onChange={handleFieldChange} type="email"
          id="email"
          placeholder="Email Address"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="username"> Username </label>
        <input onChange={handleFieldChange} type="text"
          id="username"
          placeholder="Username"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <label htmlFor="password"> Password </label>
        <input onChange={handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" autoFocus="" />
      </fieldset>
      <fieldset>
        <button type="submit">
          Register
                    </button>
      </fieldset>
    </form>
    </center>
  )
}

export default Register;