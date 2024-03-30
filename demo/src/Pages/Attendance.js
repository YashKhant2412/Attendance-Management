import { useEffect } from "react";
import { Button, Input, Select } from "./CmnCopmponent";
import Axios from "axios";
const Attendance = () => {
  //URL
  const GET_ATTENDANCE_URL = "http://localhost:8000/getAttendance";

  const getAttendance = () => {
    Axios.get(GET_ATTENDANCE_URL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getAttendance();
  }, []);
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
