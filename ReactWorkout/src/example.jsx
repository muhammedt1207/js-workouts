import { useState } from "react";
import "./App.css";

const dropDownOption = [
  {
    category: "Fruits",
    items: ["Apple", "Banana", "Orange", "Grapes"],
  },
  {
    category: "Vegetables",
    items: ["Carrot", "Broccoli", "Lettuce", "Tomato"],
  },
];

function App() {
  const [category, setCategory] = useState("");
  const [hide, setHide] = useState(false);
  const [itemArr, setItemArr] = useState([]);

  function addCategory(event) {
    setCategory(event.target.value);
    if (event.target.value === "Fruits") {
      setItemArr([...dropDownOption[0].items]);
    } else {
      setItemArr([...dropDownOption[1].items]);
    }
    setHide(true);
    console.log(itemArr);
  }

  return (
    <div>
      <h1>Choose you choice</h1>
      <select onClick={addCategory} name="dropdown" id="">
        {dropDownOption.map((cat, idx) => (
          <option key={idx} value={cat.category}>
            {cat.category}
          </option>
        ))}
      </select>

      <p>select the items</p>
          <select name="dropdown" id="">
      {hide &&
        itemArr.map((itm) => (
            <option value={itm}>{itm}</option>
        ))}
          </select>
    </div>
  );
}

export default App;