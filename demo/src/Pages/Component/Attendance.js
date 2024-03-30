import { useEffect } from "react";
import { Button, Input } from "../CmnCopmponent";
import Axios from "axios";
const Attendance = () => {

  //URL
  const Get_Attendance_Url = "/getAttendance";

  const getAttendance = () => {
    Axios.get(Get_Attendance_Url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(()=>{
    getAttendance();
  }, [])
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
