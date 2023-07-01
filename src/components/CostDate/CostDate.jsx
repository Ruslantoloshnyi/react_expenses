import "./CostDate.css";

function CostDate(props) {
  console.log(props);
  const date = props.date;
  const month = date.toLocaleString("en-EN", { month: "long" });
  const year = date.getFullYear();
  const day = date.getDate();
  return (
    <div className="cost-date">
      <div className="cost-date__mounth">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}

export default CostDate;
