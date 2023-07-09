import TenRows from "./tenRows";
import { useEffect, useState } from "react";
import "./emp.css";
import axios from "axios";
function Emp() {
  const [dataFromApi, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=200&idStarts=1001")
      .then((response) => {
        setData(response.data);
      });
  }, []);
  function changePage(pageNum) {
    setpage(pageNum + 1);
  }
  function prevPage() {
    if (currpage == 1) {
      setpage(dataFromApi.length / 10);
    } else {
      setpage(currpage - 1);
    }
  }
  function nextPage() {
    if (currpage == dataFromApi.length / 10) {
      setpage(1);
    } else {
      setpage(currpage + 1);
    }
  }
  const [currpage, setpage] = useState(1);
  let [dataToDis, setDataToDis] = useState([]);

  let tableComp = dataFromApi
    .slice(currpage * 10 - 10, currpage * 10)
    .map((data) => {
      return <TenRows {...data}></TenRows>;
    });
  useEffect(() => {
    setDataToDis(tableComp);
  }, [tableComp]);
  let buttonComp = [...Array(dataFromApi.length / 10)].map((_, i) => {
    return (
      <button
        onClick={() => changePage(i)}
        className={currpage === i + 1 ? "btnPressed pageBtn" : "pageBtn"}
      >
        {i + 1}
      </button>
    );
  });
  let isAscen = false;
  function sortByAge(currentPage) {
    let newData = dataFromApi;
    let shortData = dataFromApi.slice(currentPage * 10 - 10, currentPage * 10);
    if (isAscen == false) {
      isAscen = true;
      shortData.sort((a, b) => {
        return a.age - b.age;
      });
    } else if (isAscen == true) {
      isAscen = false;
      shortData.sort((a, b) => {
        return b.age - a.age;
      });
    }
    newData.splice(currentPage * 10 - 10, 10);
    newData.splice(currentPage * 10 - 10, 0, ...shortData);
    setData(newData);
    console.log(isAscen);
  }
  let isNameSorted = false;
  function sortByName(currentPage) {
    let newData = dataFromApi;
    let shortData = dataFromApi.slice(currentPage * 10 - 10, currentPage * 10);
    if (isNameSorted == false) {
      isNameSorted = true;
      shortData.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
          fb = b.firstName.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (isNameSorted == true) {
      isNameSorted = false;
      shortData.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
          fb = b.firstName.toLowerCase();
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    }
    newData.splice(currentPage * 10 - 10, 10);
    newData.splice(currentPage * 10 - 10, 0, ...shortData);
    setData(newData);
    console.log("sorted by names");
  }
  function sortByDob() {
    console.log("sorted by DOB");
    setData([]);
  }
  return (
    <div className="tContainer">
      <div className="whiteTable">
        <table>
          <tr className="headingRow">
            <th className="allHead">Image</th>
            <th className="allHead" onClick={() => sortByName(currpage)}>
              Name
            </th>
            <th onClick={() => sortByAge(currpage)} className="allHead">
              Age
            </th>
            <th className="allHead" onClick={() => sortByDob(currpage)}>
              Dob
            </th>
          </tr>
          {dataToDis}
        </table>
        <br />
        <button className="prevNext" onClick={() => prevPage()}>
          PREV
        </button>
        {buttonComp}
        <button className="prevNext" onClick={() => nextPage()}>
          NEXT
        </button>
      </div>
    </div>
  );
}
export default Emp;
