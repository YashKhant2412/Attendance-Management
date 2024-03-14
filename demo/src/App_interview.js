import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const fetchData = async function () {
    const res = await axios.get("https://dummyjson.com/products");
    setData(res.data.products);
  };

  useEffect(() => {
    if (searchTxt) {
      let tempdata = [...data];
      tempdata = tempdata.filter((dt) => dt.title.includes(searchTxt));
      setData(tempdata);
    }
  }, [searchTxt]);

  return (
    <div className="App">
      <button onClick={fetchData}>Get Data</button>
      <input
        type="text"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, ind) => (
            <tr>
              <td>{item?.title}</td>
              <td>{item?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
