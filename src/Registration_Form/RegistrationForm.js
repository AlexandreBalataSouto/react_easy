import { React, useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [submitted, setSubmited] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    setSubmited(true);

    if (value.firstname && value.lastname && value.email) {
      setValue({ value, firstname: "", lastname: "", email: "" });
      setSubmited(false);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
  function handleName(e) {
    const input = e.target.value;
    setValue({ ...value, firstname: input });
    setIsValid(false);
  }
  function handleLastname(e) {
    const input = e.target.value;
    setValue({ ...value, lastname: input });
    setIsValid(false);
  }
  function handleEmail(e) {
    const input = e.target.value;
    setValue({ ...value, email: input });
    setIsValid(false);
  }

  return (
    <form className="container" action="#" onSubmit={handleForm}>
      {isValid ? <span className="confirm">Thank you for register!</span> : ""}

      {!value.firstname && submitted ? (
        <span className="error">The field "First Name" is mandatory</span>
      ) : (
        ""
      )}
      <input
        type="text"
        placeholder="First Name"
        onChange={handleName}
        value={value.firstname}
      />
      {!value.lastname && submitted ? (
        <span className="error">The field "Last Name" is mandatory</span>
      ) : (
        ""
      )}
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastname}
        value={value.lastname}
      />
      {!value.email && submitted ? (
        <span className="error">The field "Email" is mandatory</span>
      ) : (
        ""
      )}
      <input
        type="email"
        placeholder="Email"
        onChange={handleEmail}
        value={value.email}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
