import CostItem from "../CostItem/CostItem";
import "./Costs.css";

function Costs(props) {
  return (
    <div className="costs">
      <CostItem></CostItem>
      <CostItem></CostItem>
      <CostItem></CostItem>
    </div>
  );
}

export default Costs;
