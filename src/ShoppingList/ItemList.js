import { useContext } from "react";
import { ShoppingListContext } from "./ShoppingList";

const ItemList = ({ id, name, amount, state }) => {
  const {
    toggleState,
    FontAwesomeIcon,
    operation,
    faChevronRight,
    faChevronLeft,
    faCircle,
    faCheckCircle,
  } = useContext(ShoppingListContext);
  return (
    <>
      <div className="item">
        {state ? (
          <div className="item_description">
            {
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="faCheckCircle"
                onClick={() => toggleState(id)}
              />
            }
            <span className="outline">{name}</span>
          </div>
        ) : (
          <div className="item_description">
            {
              <FontAwesomeIcon
                icon={faCircle}
                className="faCircle"
                onClick={() => toggleState(id)}
              />
            }
            <span>{name}</span>
          </div>
        )}
        {state ? (
          <div className="item_operation disabled">
            {<FontAwesomeIcon icon={faChevronLeft} className="faChevronLeft" />}
            <span>{amount}</span>
            {
              <FontAwesomeIcon
                icon={faChevronRight}
                className="faChevronRight"
              />
            }
          </div>
        ) : (
          <div className="item_operation">
            {
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="faChevronLeft"
                onClick={() => operation(id, "subtract")}
              />
            }
            <span>{amount}</span>
            {
              <FontAwesomeIcon
                icon={faChevronRight}
                className="faChevronRight"
                onClick={() => operation(id, "add")}
              />
            }
          </div>
        )}
      </div>
      <hr className="item_line" />
    </>
  );
};

export default ItemList;
