import { useState } from "react";
import { useSelector } from "react-redux";
import CreateUserPage from "./CreateUserPage";
import LoginPage from "./LoginPage";
import css from "../Css/LandingPage.module.css";
import cmn from "../Css/CmnComponent.module.css";
import Home from "./Component/Home";

const LandingPage = () => {
  const [selectPage, setSelectPage] = useState(true);

  const loggedinSuccess = useSelector((state) => state?.authReducer?.status);
  console.log(loggedinSuccess, "selector");
  return (
    <>
    {!loggedinSuccess ? (
      <div className={css.Container}>
        <div className={css.leftContainer}>
          <div>
            <h1>Welcome</h1>
            <h2>402 BENGALURU</h2>
          </div>
        </div>
        <div className={css.rightContainer}>
          <div className={css.boxContainer}>
            <div className={css.topBox}>
              {selectPage ? <LoginPage /> : <CreateUserPage />}
            </div>
            <div className={css.bottomBox}>
              <button
                className={cmn.button}
                onClick={() => setSelectPage(!selectPage)}
              >
                {selectPage ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div>
          <Home/>
        </div>
      )}
    </>
  );
};

export default LandingPage;
