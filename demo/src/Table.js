import axios from "axios";
import { useEffect, useState } from "react";

const Table = ({ counter }) => {
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/getdata");
    try {
      if (res.status == 200) {
        setTableData(res.data.data);
      }
    } catch {
      console.log("something went wrong");
    }
    console.log(res?.data?.data, "response data");
  };
  useEffect(() => {
    getData();
  }, [counter]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SL. NO.</th>
            <th>Name</th>
            <th>Roll No.</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((rw, ind) => (
              <tr>
                <td>{ind + 1}</td>
                <td>{rw?.name}</td>
                <td>{rw?.rollNo}</td>
                <td>{rw?.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
