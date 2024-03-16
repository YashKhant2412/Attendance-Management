import { Button, Input, Select } from "./CommonModule/CmnCopmponent";
// import { Button2 } from "./CommonModule/CommonPage/Button";

const App = () => {
  // const data = ["a", "bb", "cccc"];
  const data = [{"name":'a', "value": "aa"}, {"name":'b', "value": "bb"}, {"name":'c', "value": "cc"}];

  return (
    <>
    <div style={{display:"flex"}}>
      <Button buttonCss={"blueBtn"} buttonName={"Save"}/>
      <Button buttonCss={"redBtn"} buttonName={"Cancel"}/>
      <Input fieldName={"Name"} />
      <Select optionData={data}/>
      </div>
    </>
  );
};

export default App;
