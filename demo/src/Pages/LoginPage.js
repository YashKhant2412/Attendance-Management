import css from "../Css/Login.module.css";
import cmn from "../Css/CmnComponent.module.css";
import React, { useState } from "react";
import Axios from "axios";

const LoginPage = () => {

  //URL
  const login_Url = "/login";

  //State
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    email: "",
    password: ""
  });


  const onchangeHandler = (e) => {
    console.log(e.target.value, "login event");
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    Axios.post(login_Url, loginDetail)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const handleLogin = (e) => {
  //   if (username && password || email && password) {
  //     // setLoggedIn(true);
  //     alert("Logged in successfully!");
  //   } else {
  //     alert("Please enter username and password.");
  //   }
  // };

  return (
    <div className={css.container}>
      <div className={css.cont}>
        <div className={css.subCont}>
          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="text"
              name="username"
              onChange={onchangeHandler}
              required
              placeholder="User Name"
              disabled={loginDetail.email}
            />
          </div>

          <div className={cmn.inputBo}>
            <pre style={{fontSize:"18px"}}>                 Or</pre>
          </div>

          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="email"
              name="email"
              onChange={onchangeHandler}
              required
              placeholder="Email i'd"
              disabled={loginDetail.username}
            />
          </div>

          <div className={cmn.inputBox}>
            <input
              className={cmn.input}
              type="password"
              placeholder="Password"
              name="password"
              onChange={onchangeHandler}
              required
            />
          </div>
          <div className={cmn.inputBox}>
            <button className={`${cmn.button} ${cmn.blueBtn}`} onClick={handleLogin}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
