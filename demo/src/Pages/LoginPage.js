import css from "../Css/Login.module.css";
import cmn from "../Css/CmnComponent.module.css";
import { Input, Button } from "./CmnCopmponent";
import React, { useState } from "react";
import Axios from "axios";

const LoginPage = () => {
  //URL
  const login_Url = "/login";

  //State
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    email: "",
    password: "",
    password: "",
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

  return (
    <div className={css.container}>
      <div className={css.cont}>
        <div className={css.subCont}>
          <Input
            type={"text"}
            name={"userName"}
            onchangeHandle={onchangeHandler}
            value={""}
            required={true}
            placeholder={"Email / User Name"}
          />

          <Input
            type={"password"}
            name={"password"}
            onchangeHandle={onchangeHandler}
            value={""}
            required={true}
            placeholder={"Password"}
          />

          <Button
            buttonName={"Log in"}
            buttonCss={"blueBtn"}
            onclickHandle={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
