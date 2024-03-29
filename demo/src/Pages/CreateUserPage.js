import css from "../Css/Login.module.css";
import cmn from "../Css/CmnComponent.module.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const CreateUserPage = () => {
  
  //URL

  const Create_User_Url = "/createUser";
  // const Get_Attendance_Url = "/getAttendance";

  const data = [
    { label: "OPMS", value: "1" },
    { label: "NSWS", value: "2" },
    { label: "CAIR", value: "3" },
    { label: "TCS", value: "4" },
  ];

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

  // const getAttendance = () => {
  //   Axios.get(Get_Attendance_Url)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

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
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.container}>
      <div className={css.cont}>
        <div className={css.subCont}>
          <div className={css.flexBox}>
            <div className={cmn.inputBox}>
              <input
                className={cmn.input}
                type="text"
                name="firstName"
                onChange={onchangeHandler}
                required
                placeholder="First Name"
              />
            </div>

            <div className={cmn.inputBox}>
              <input
                className={cmn.input}
                type="text"
                name="lastName"
                onChange={onchangeHandler}
                
                required
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="text"
              name="username"
              onChange={onchangeHandler}
              
              required
              placeholder="User Name"
            />
          </div>

          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="text"
              name="phone"
              onChange={onchangeHandler}
              
              required
              placeholder="Phone No"
            />
          </div>

          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="text"
              name="email"
              onChange={onchangeHandler}
              
              required
              placeholder="Email I'd"
            />
          </div>

          <div className={cmn.selectBox}>
            <select className={cmn.select} id="country" name="country">
              {data.map((data, index) => (
                <option key={index}
                  value={data.value}
                  name={"projectId"}
                  onChange={onchangeHandler}
                >
                  {data.label}
                </option>
              ))}
            </select>
          </div>

          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="password"
              name="password"
              onChange={onchangeHandler}
              id="password"
              placeholder="Password"
              
              required
            />
          </div>

          <div className={css.flexBox}>
            <div className={cmn.inputBox}>
              <input
                className={cmn.input}
                type="date"
                name="DOB"
                onChange={onchangeHandler}
                required
                placeholder="DOB"
              />
            </div>

            <div className={cmn.inputBox}>
              <input
                className={cmn.input}
                type="date"
                name="DOJ"
                onChange={onchangeHandler}
                
                required
                placeholder="DOJ"
              />
            </div>
          </div>

          <div className={cmn.inputBox}>
            <button
              onClick={creteAttendance}
              className={`${cmn.button} ${cmn.blueBtn}`}
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
