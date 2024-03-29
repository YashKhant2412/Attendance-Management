import React, { useState } from "react";
import css from "../Css/CmnComponent.module.css";

const Button = ({ buttonCss, buttonName }) => {
  return <div className={`${css.button} ${css[buttonCss]}`}>{buttonName}</div>;
};

const Input = ({ fieldName }) => {
  return (
    <>
      <div className={css.input}>
        <label htmlFor={fieldName}> {fieldName} </label>
        <input id={fieldName} type="text" />
      </div>
    </>
  );
};

const Select = ({optionData}) => {

    const data1 = useState(optionData)
  return (
    <>
      <div className={css.select}>
        <select id="country" name="country">
          {data1[0].map((data) => (
            <option value={data.value} name={data.name}>{data.value}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export { Button, Input, Select };
