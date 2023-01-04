import React, { useState, useEffect } from "react";
import "./ToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import Task from "./Task";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }
  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = () => {
    if (document.getElementById("inputNewTodo").value !== "") {
      const todoObject = {
        id: uuid(),
        text: document.getElementById("inputNewTodo").value,
        completed: false,
      };
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      localTodos.push(todoObject);
      localStorage.setItem("todos", JSON.stringify(localTodos));
      setTodos(localTodos);
      document.getElementById("inputNewTodo").value = "";
    }
  };

  const checkTask = (id) => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    localTodos.filter((item) => {
      if (item.id == id && item.completed === false) {
        item.completed = true;
      } else if (item.id == id && item.completed === true) {
        item.completed = false;
      }
    });
    localStorage.setItem("todos", JSON.stringify(localTodos));
    setTodos(localTodos);
  };

  const deleteTask = (id) => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    let newLocalTodos = localTodos.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem("todos", JSON.stringify(newLocalTodos));
    setTodos(newLocalTodos);
  };

  const filterTask = (status) => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));

    switch (status) {
      case "All":
        setTodos(localTodos);
        break;
      case "Completed":
        setTodos(
          localTodos.filter((item) => {
            if (item.completed) return item;
          })
        );
        break;
      case "Unfinished":
        setTodos(
          localTodos.filter((item) => {
            if (!item.completed) return item;
          })
        );
        break;
    }
  };

  return (
    <div className="container">
      <div className="todo_title">
        <h1>Balata`s Todo List</h1>
      </div>
      <div className="todo_inputs">
        <input type="text" id="inputNewTodo" />
        <button onClick={() => addTodo()}>
          <FontAwesomeIcon icon={faSquarePlus} className="faSquarePlus" />
        </button>
        <select
          name="filter"
          id="filter"
          onChange={(e) => filterTask(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Unfinished">Unfinished</option>
        </select>
      </div>
      <div className="todo_tasks">
        {todos.map((item) => {
          return (
            <Task
              data={item}
              checkTask={checkTask}
              deleteTask={deleteTask}
              key={item.id}
            ></Task>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
