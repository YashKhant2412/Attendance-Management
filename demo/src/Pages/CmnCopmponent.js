import React, { useState } from "react";
import css from "../Css/CmnComponent.module.css";

const Button = ({ onclickHandle, buttonCss, buttonName }) => {
  return (
    <>
      <div className={css.inputBox}>
        <button
          onClick={onclickHandle}
          className={`${css.button} ${css[buttonCss]}`}
        >
          {buttonName}
        </button>
      </div>
    </>
  );
};

const Input = ({
  id,
  type,
  name,
  onchangeHandle,
  value,
  required,
  placeholder,
  disabled,
}) => {
  return (
    <>
      <div className={css.inputBox}>
        <input
          id={id}
          type={type}
          name={name}
          onChange={onchangeHandle}
          value={value}
          className={css.input}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </>
  );
};

const Select = ({ optionData }) => {
  const data1 = useState(optionData);
  return (
    <>
      <div className={css.select}>
        <select id="country" name="country">
          {data1[0].map((data) => (
            <option value={data.value} name={data.name}>
              {data.value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export { Button, Input, Select };
