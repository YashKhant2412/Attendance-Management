import { useState } from "react";
import css from "./Form.module.css";
import axios from "axios";

const Form = ({ setCounter, counter }) => {
  const ADD_URL = "http://localhost:3001/addData";
  const BASE_DATA = {
    rollNo: "",
    name: "",
    phone: "",
  };
  const [currentData, setCurrentData] = useState({ ...BASE_DATA });
  const handleAdd = async () => {
    const err = Object.values(currentData).reduce((acc, cur) => {
      return !!acc && !!cur;
    }, true);
    if (err) {
      const res = await axios.post(ADD_URL, currentData);
      try {
        if (res.status == 200) {
          console.log(res, "given response");
          setCurrentData({ ...BASE_DATA });
          setCounter(counter + 1);
        }
      } catch {
        console.log("something went wrong...");
      }
    }
  };

  return (
    <div className={css.formMain}>
      <div className={css.formInput}>
        <span>Roll No: </span>
        <input
          type="text"
          value={currentData.rollNo || ""}
          onChange={(e) => {
            setCurrentData({ ...currentData, rollNo: e.target.value });
          }}
        />
      </div>
      <div className={css.formInput}>
        <span>Name: </span>
        <input
          type="text"
          value={currentData.name || ""}
          onChange={(e) => {
            setCurrentData({ ...currentData, name: e.target.value });
          }}
        />
      </div>
      <div className={css.formInput}>
        <span>Phone No: </span>
        <input
          type="text"
          value={currentData.phone || ""}
          onChange={(e) => {
            setCurrentData({ ...currentData, phone: e.target.value });
          }}
        />
      </div>
      <div className={css.formButton}>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Form;
