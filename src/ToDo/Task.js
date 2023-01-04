import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ data, checkTask, deleteTask }) => {
  return (
    <div className="todo_tasks-task">
      {data.completed === true ? (
        <input
          type="text"
          value={data.text}
          readOnly
          style={{ textDecoration: "line-through", color: "grey" }}
        />
      ) : (
        <input type="text" value={data.text} readOnly />
      )}
      <button onClick={() => checkTask(data.id)}>
        <FontAwesomeIcon icon={faCheck} className="faCheck" />
      </button>
      <button onClick={() => deleteTask(data.id)}>
        <FontAwesomeIcon icon={faTrash} className="faTrash" />
      </button>
    </div>
  );
};

export default Task;
