import React, { useState } from "react";

const Contact = ({ picture, name, lastname, email, age }) => {
  const [isShowAge, setIsShowAge] = useState(false);
  return (
    <div className="contact">
      <img src={picture.large} alt="profile" />
      <div className="contact_info">
        <p>Name: {name + " " + lastname}</p>
        <p>Email: {email}</p>
        <p>
          <button onClick={() => setIsShowAge(!isShowAge)}>Show Age</button>
          {isShowAge ? ": " + age : ""}
        </p>
      </div>
    </div>
  );
};

export default Contact;
