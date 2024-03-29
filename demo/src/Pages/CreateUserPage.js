import css from "../Css/Login.module.css";
import cmn from "../Css/CmnComponent.module.css";
import React, { useState } from "react";
import Axios from "axios";
import { Input, Button } from "./CmnCopmponent";

const CreateUserPage = () => {
  
  //URL
  const Create_User_Url = "/createUser";


  //JSON
  const data = [
    { label: "OPMS", value: "1" },
    { label: "NSWS", value: "2" },
    { label: "CAIR", value: "3" },
    { label: "TCS", value: "4" },
  ];


  //state
  const [create, setCreate] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    DOB: "",
    DOJ: "",
    projectId: "",
    role: "employee",
    password: "",
  });

  

  //Function
  const creteAttendance = () => {
    Axios.post(Create_User_Url, create)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onchangeHandler = (e) => {
    console.log(e.target.value);
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.container}>
      <div className={css.cont}>
        <div className={css.subCont}>
          <div className={css.flexBox}>
            <Input
              type={"text"}
              name={"firstName"}
              onchangeHandle={onchangeHandler}
              value={create.firstName}
              required={true}
              placeholder={"First Name"}
            />
            <Input
              type={"text"}
              name={"lastName"}
              onchangeHandle={onchangeHandler}
              value={create.lastName}
              required={true}
              placeholder={"Last Name"}
            />
          </div>

          <Input
            type={"text"}
            name={"username"}
            onchangeHandle={onchangeHandler}
            value={create.username}
            required={true}
            placeholder={"User Name"}
          />

          <Input
            type={"text"}
            name={"phone"}
            onchangeHandle={onchangeHandler}
            value={create.phone}
            required={true}
            placeholder={"Phone No"}
          />

          <Input
            type={"text"}
            name={"email"}
            onchangeHandle={onchangeHandler}
            value={create.email}
            required={true}
            placeholder={"Email I'd"}
          />

          <div className={cmn.selectBox}>
            <select className={cmn.select} name="projectId" onChange={onchangeHandler}>
              {data.map((data, index) => (
                <option
                  key={index}
                  value={data.value}
                >
                  {data.label}
                </option>
              ))}
            </select>
          </div>

          <Input
            type={"password"}
            name={"password"}
            onchangeHandle={onchangeHandler}
            value={create.password}
            required={true}
            placeholder={"Password"}
          />

          <div className={css.flexBox}>
            <Input
              type={"date"}
              name={"DOB"}
              onchangeHandle={onchangeHandler}
              value={create.DOB}
              required={true}
              placeholder={"DOB"}
            />
            <Input
              type={"date"}
              name={"DOJ"}
              onchangeHandle={onchangeHandler}
              value={create.DOJ}
              required={true}
              placeholder={"DOJ"}
            />
          </div>

          <Button
            buttonName={"Create new account"}
            buttonCss={"blueBtn"}
            onclickHandle={creteAttendance}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
