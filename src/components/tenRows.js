import "./emp.css";

function TenRows({ imageUrl, age, firstName, dob, lastName }) {
  return (
    <tr className="headingRow hoverEff">
      <img src={imageUrl} className="empimg" />
      <td className=" allHead">{firstName}</td>
      <td className="allHead">{age}</td>
      <td className="allHead">{dob}</td>
    </tr>
  );
}

export default TenRows;
