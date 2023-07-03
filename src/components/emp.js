import axios from "axios";
import "./nav.css";
import { useEffect, useState } from "react";
function Emp() {
  let [dataFromApi, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((res) => setData(res.data));
  }, []);
  console.log(dataFromApi);
  return (
    <div className="empcont">
      {dataFromApi.map((data) => (
        <div className="empglass special">
          <h2 className="white">
            Name: {data.firstName} {data.lastName}
          </h2>
          <h2 className="white">Age: {data.age}</h2>
          <h2 className="white">Date of birth {data.dob}</h2>
        </div>
      ))}
    </div>
  );
}
export default Emp;
