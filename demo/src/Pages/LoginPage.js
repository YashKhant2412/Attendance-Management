import css from "../Css/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../Store/authSlice";
import { setToken } from "../Store/tokenSlice";
import { Input, Button } from "./CmnCopmponent";
import React, { useState } from "react";
import axios from "axios";
import instance from "../Services/AxiosInstance";
import { setLoginDetails } from "../Store/logindetailsSlice";

const LoginPage = () => {
  const [loggedinSuccess, setloggeinSuccess] = useState(false);
  //Redux
  const dispatch = useDispatch();
  const gg = useSelector((data) => data);
  console.log(gg, "redux data");
  //URL
  const LOGIN_URL = "/login";

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

  const handleLogin = async () => {
    try {
      const res = await instance.post(LOGIN_URL, loginDetail);
      if (res.status == 200) {
        if (res.data.status) {
          dispatch(setToken(res?.data?.token));
          dispatch(
            setLoginDetails({
              username: res?.data?.username,
              isloggedIn: true,
            })
          );
        }
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div className={css.container}>
      {!loggedinSuccess ? (
        <div className={css.cont}>
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
        </div>
      ) : (
        <h1>logged in</h1>
      )}
    </div>
  );
};

export default LoginPage;
