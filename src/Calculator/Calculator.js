import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [isInit, setIsInit] = useState(false);
  const [isOperation, setIsOperation] = useState("");

  const digit = (value) => {
    //After an operation
    if (isOperation === "" && !isInit && result !== "0") {
      if (value === "+" || value === "-" || value === "X" || value === "/") {
        setIsInit(true);
        setResult(result + value);
        setIsOperation(value);
      } else if (value === "0") {
        setIsInit(true);
        setResult(value);
      }
    }
    if (
      !isInit &&
      value !== "0" &&
      value !== "+" &&
      value !== "-" &&
      value !== "X" &&
      value !== "/"
    ) {
      //Display on screen
      if (value === ".") {
        setResult(result + value);
      } else {
        setResult("");
        setResult(value);
      }

      setIsInit(true);
    } else if (isInit) {
      if (result[0] !== "0") {
        setResult(result + value);
      } else if (
        result[0] === "0" &&
        (value === "+" || value === "-" || value === "X" || value === "/")
      ) {
        setResult(result + value);
      } else if (result[0] === "0" && isOperation !== "") {
        setResult(result + value);
      }
    }

    //Set operation
    if (isInit) {
      if (
        (value === "+" || value === "-" || value === "X" || value === "/") &&
        isOperation === ""
      ) {
        setIsOperation(value);

        if (!isInit) {
          setIsInit(true);
        }
      }
    }
  };

  const clear = () => {
    setResult("0");
    setIsInit(false);
  };

  const operation = () => {
    let split = [];

    if (isOperation !== "") {
      split = result.split(isOperation);
    } else {
      split.push(result);
    }

    switch (isOperation) {
      case "+":
        setResult(parseFloat(split[0]) + parseFloat(split[1]));
        break;
      case "-":
        setResult(parseFloat(split[0]) - parseFloat(split[1]));
        break;
      case "X":
        setResult(parseFloat(split[0]) * parseFloat(split[1]));
        break;
      case "/":
        setResult(parseFloat(split[0]) / parseFloat(split[1]));
        break;
      case "":
        setResult(parseFloat(split[0]));
        break;
    }
    setIsOperation("");
    setIsInit(false);
  };

  return (
    <div className="container">
      <div className="screen">
        <span className="result">{result}</span>
      </div>
      <div className="buttons">
        <button onClick={() => digit("7")}>7</button>
        <button onClick={() => digit("8")}>8</button>
        <button onClick={() => digit("9")}>9</button>
        <button className="action" onClick={() => digit("/")}>
          /
        </button>
        <button onClick={() => digit("4")}>4</button>
        <button onClick={() => digit("5")}>5</button>
        <button onClick={() => digit("6")}>6</button>
        <button className="action" onClick={() => digit("X")}>
          X
        </button>
        <button onClick={() => digit("1")}>1</button>
        <button onClick={() => digit("2")}>2</button>
        <button onClick={() => digit("3")}>3</button>
        <button className="action" onClick={() => digit("+")}>
          +
        </button>
        <button onClick={() => digit(".")}>.</button>
        <button onClick={() => digit("0")}>0</button>
        <button onClick={() => operation()}>=</button>
        <button className="action" onClick={() => digit("-")}>
          -
        </button>
      </div>
      <div className="clear">
        <button onClick={() => clear()}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
