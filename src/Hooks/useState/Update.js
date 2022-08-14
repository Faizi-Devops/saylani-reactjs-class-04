import { useState } from "react";
import "./style.css";

let Update = () => {
  let [students, setStudents] = useState([
    {
      name: "Faizan Ali",
      roll: 49546,
      class: "BSCS",
      batch: "2019-2023",

    },
    {
      name: "Muhammad Arslan",
      roll: 49566,
      class: "BSIT",
      batch: "2018-2022",

    },
    {
      name: "Faisal Nawaz",
      roll: 49555,
      class: "BS Economics",
      batch: "2014-2018",

    },
    {
      name: "Naveed Sarwar",
      roll: 49666,
      class: "BS Bioinformatics",
      batch: "2012-2016",

    },
  ]);
  return (
    <div>

      <div className="A"><h1>List of Students</h1></div>
      <table className="table">

        <tr>
          <th scope="col">No.</th>
          <th scope="col">Student Name</th>
          <th scope="col">Student Roll</th>
          <th scope="col">Student Class</th>
          <th scope="col">Student Batch</th>
        </tr>



        {students.map((value, index) => {
          return (
            <tr>
              <td scope="col">{index + 1}</td>
              <td scope="col">{value.name}</td>
              <td scope="col">{value.roll}</td>
              <td scope="col">{value.class}</td>
              <td scope="col">{value.batch}</td>
            </tr>
          )

        })}

      </table>



    </div>

  )
}
export default Update;