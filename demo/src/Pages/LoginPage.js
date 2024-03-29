import css from "../Css/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../Store/Reducer/AuthReducer"
import { Input, Button } from "./CmnCopmponent";
import React, { useState } from "react";
import Axios from "axios";

const LoginPage = () => {

  //Redux
  const dispatch = useDispatch();
  const loggedinSuccess = useSelector((state)=>state?.authReducer?.status)
  console.log(loggedinSuccess, "selector");

  //URL
  const login_Url = "/login";

  //State
  const [loginDetail, setLoginDetail] = useState({
    userId: "",
    password: "",
  });

  //Function
  const onchangeHandler = (e) => {
    console.log(e.target.value, "login event");
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    Axios.post(login_Url, loginDetail)
      .then((response) => {
        console.log(response.data);
        if (response.data.status){
          dispatch(login(true))
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      }); 
  };

  return (
    <div className={css.container}>
      {
        !loggedinSuccess ? <div className={css.cont}>
        <div className={css.subCont}>
          <Input
            type={"text"}
            name={"userId"}
            onchangeHandle={onchangeHandler}
            value={loginDetail.userId}
            required={true}
            placeholder={"Email / User Name"}
          />

          <Input
            type={"password"}
            name={"password"}
            onchangeHandle={onchangeHandler}
            value={loginDetail.password}
            required={true}
            placeholder={"Password"}
          />

          <Button
            buttonName={"Log in"}
            buttonCss={"blueBtn"}
            onclickHandle={handleLogin}
          />
        </div>
      </div> : <h1>logged in</h1>
      }
      
    </div>
  );
};

export default LoginPage;
