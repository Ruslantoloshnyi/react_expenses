import CostItem from "../CostItem/CostItem";
import "./Costs.css";
import CostFilter from "../CostFilter/CostFilter";
import { useState } from "react";

function Costs(props) {
  const [year, setYear] = useState("2023");
  function onChangeYear(value) {
    console.log(value);
    setYear(value);
  }

  return (
    <div className="costs">
      <CostFilter curentYear={year} onChangeYear={onChangeYear}></CostFilter>
      <CostItem
        date={props.costs[0].date}
        discription={props.costs[0].discription}
        amount={props.costs[0].amount}
      ></CostItem>
      <CostItem
        date={props.costs[1].date}
        discription={props.costs[1].discription}
        amount={props.costs[1].amount}
      ></CostItem>
      <CostItem
        date={props.costs[2].date}
        discription={props.costs[2].discription}
        amount={props.costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default Costs;
