import React, { useState, useEffect } from "react";
import "./SimpleContactList.css";
import Contact from "./Contact";

const url = "https://randomuser.me/api/?results=10";

const SimpleContactList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.results);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {users.map((item) => {
        return (
          <Contact
            picture={item.picture}
            name={item.name.first}
            lastname={item.name.last}
            email={item.email}
            age={item.registered.age}
            key={item.login.md5}
          ></Contact>
        );
      })}
    </div>
  );
};

export default SimpleContactList;
