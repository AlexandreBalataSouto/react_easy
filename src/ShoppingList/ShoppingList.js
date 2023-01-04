import React, { useState, useRef, useContext } from "react";
import "./ShoppingList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import ItemList from "./ItemList";

export const ShoppingListContext = React.createContext();

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const inputItemRef = useRef(null);

  const addItem = () => {
    const inputItem = inputItemRef.current.value;
    let item = {
      id: uuid(),
      name: "",
      state: false,
      amount: 1,
    };
    if (inputItem !== "") {
      //Add Item
      item.name = inputItem;
      setList([...list, item]);
      inputItemRef.current.value = "";
      //Total
      setTotal(total + 1);
    }
  };

  const toggleState = (id) => {
    let newList = list.filter((item) => {
      if (item.id === id) {
        item.state = !item.state;
        if (item.state === true) {
          setTotal(total - item.amount);
        } else {
          setTotal(total + item.amount);
        }
      }
      return item;
    });
    setList(newList);
  };

  const operation = (id, action) => {
    let newList = list.filter((item) => {
      if (item.id === id) {
        if (action === "add") {
          item.amount++;
          setTotal(total + 1);
        } else if (action === "subtract") {
          if (item.amount > 0) {
            item.amount--;
            setTotal(total - 1);
          }
        }
      }
      return item;
    });
    setList(newList);
  };

  return (
    <ShoppingListContext.Provider
      value={{
        toggleState,
        operation,
        FontAwesomeIcon,
        faChevronRight,
        faChevronLeft,
        faCircle,
        faCheckCircle,
      }}
    >
      <div className="container">
        <div className="item_add">
          <input
            type="text"
            placeholder="Add an item..."
            maxLength="18"
            ref={inputItemRef}
          />
          <button onClick={() => addItem()}>
            <FontAwesomeIcon icon={faPlus} className="faPlus" />
          </button>
        </div>
        <div className="items">
          {list.map((listItem) => {
            return <ItemList key={listItem.id} {...listItem}></ItemList>;
          })}
        </div>
        <div className="item_amount">Total: {total}</div>
      </div>
    </ShoppingListContext.Provider>
  );
};

export default ShoppingList;
