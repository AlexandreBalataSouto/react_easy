import { useState } from "react";
import "./Temperature.css";

const Temperature = () => {
  const [temperature, setTemperature] = useState(0);
  const [background, setBackground] = useState("cold");

  const increaseTemp = () => {
    const newTemp = temperature + 1;

    setTemperature(newTemp);

    if (newTemp > 10) {
      setBackground("hot");
    }
  };

  const decreaseTemp = () => {
    const newTemp = temperature - 1;

    setTemperature(newTemp);

    if (newTemp <= 10) {
      setBackground("cold");
    }
  };

  return (
    <div className="container">
      <div className={`celsius ${background}`}>{temperature}ºC</div>
      <div className="buttons">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};

export default Temperature;
