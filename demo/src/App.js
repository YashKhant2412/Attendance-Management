import LandingPage from "./Pages/LandingPage";
import { Button } from "./Pages/CmnCopmponent";

const App = () => {
  const onclickHandle = () => {
    console.log("input onchage");
  };

  // className={`${css.button} ${css.blueBtn}`}

  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
