import { useState } from "react";
import CreateUserPage from "./CreateUserPage";
import LoginPage from "./LoginPage";
import css from "../Css/LandingPage.module.css"
import cmn from "../Css/CmnComponent.module.css";


const LandingPage = () => {
  const [selectPage, setSelectPage] = useState(true);
  return (
    <>
      <div className={css.Container} >
        <div className={css.leftContainer} >
            <div>
          <h1>Room 402 Project</h1>
          
          <h4>
            Welcome to Room 402 Page.
          </h4>
          </div>
        </div>
        <div className={css.rightContainer} >
            <div className={css.topBox}>
            {selectPage ? <LoginPage /> : <CreateUserPage />}
            </div>
            <div className={css.bottomBox}> 
                <button className={cmn.button} onClick={()=>setSelectPage(!selectPage)}>{selectPage ? "Sign up" : "Sign in"}</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
