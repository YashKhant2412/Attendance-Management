import { Button, Input, Select } from "./Pages/CmnCopmponent";
import LoginPage from "./Pages/LoginPage";

import LandingPage from "./Pages/LandingPage";


const App = () => {
  // const data = ["a", "bb", "cccc"];
  // const data = [{"name":'a', "value": "aa"}, {"name":'b', "value": "bb"}, {"name":'c', "value": "cc"}];

  return (
    <>
      <LandingPage/>
    {/* <div style={{display:"flex"}}>
      <Button buttonCss={"blueBtn"} buttonName={"Save"}/>
      <Button buttonCss={"redBtn"} buttonName={"Cancel"}/>
      <Input fieldName={"Name"} />
      <Select optionData={data}/>
      </div> */}
    </>
  );
};

export default App;
