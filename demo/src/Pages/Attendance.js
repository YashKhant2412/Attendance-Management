import { Button, Input, Select } from "./CmnCopmponent";

const Attendance = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Button buttonCss={"redBtn"} buttonName={"Cancel"} />
        <Input fieldName={"Name"} />
      </div>
      ;
    </>
  );
};

export default Attendance;
