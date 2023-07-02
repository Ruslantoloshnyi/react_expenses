import CostItem from "../CostItem/CostItem";
import "./Costs.css";
import CostFilter from "../CostFilter/CostFilter";
import { useState } from "react";

function Costs(props) {
  const [year, setYear] = useState("2023");
  function onChangeYear(value) {
    setYear(value);
  }

  const filteredCosts = props.costs.filter(function (item) {
    if (item.date.getFullYear().toString() === year) {
      return true;
    }
  });

  const CostItems = filteredCosts.map(function (item) {
    return (
      <CostItem
        key={item.id}
        date={item.date}
        name={item.name}
        price={item.price}
      ></CostItem>
    );
  });

  return (
    <div className="costs">
      <CostFilter curentYear={year} onChangeYear={onChangeYear}></CostFilter>
      {CostItems}
    </div>
  );
}

export default Costs;
