import Axios from "axios";

const AxiosInstance = () => {
  const res = Axios.get("localhost:8000/getAttendance");
  console.log(res.data);
  return <>jdshjsk</>;
};

export default AxiosInstance;
