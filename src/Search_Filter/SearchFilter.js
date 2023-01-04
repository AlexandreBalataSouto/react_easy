import { React, useState } from "react";
import "./SearchFilter.css";
import { names } from "./names.js";

const SearchFilter = () => {
  const [data, setData] = useState(names);

  //   function filterList(e) {
  //     const filter = e.target.value.toUpperCase();
  //     const list = document.querySelectorAll(".user");
  //     let text = "";

  //     for (let i = 0; i < list.length; i++) {
  //       text = list[i].textContent || list[i].innerText;

  //       if (text.toUpperCase().indexOf(filter) > -1) {
  //         list[i].style.display = "";
  //       } else {
  //         list[i].style.display = "none";
  //       }
  //     }
  //   }

  function filterList(e) {
    let filter = e.target.value;
    let newData = names.filter((item) => {
      let fullname = item.first_name + " " + item.last_name;
      if (fullname.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
        return item;
      }
    });
    setData(newData);
  }

  return (
    <div className="container">
      <div>
        <h2>Search Filter</h2>
      </div>
      <div>
        <input type="text" placeholder="Search..." onChange={filterList} />
      </div>
      <div className="list">
        {data.map((item) => {
          return (
            <p key={item.id} className="user">
              {item.first_name} {item.last_name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilter;
