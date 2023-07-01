import CostItem from "../CostItem/CostItem";
import "./Costs.css";

function Costs(props) {
  return (
    <div className="costs">
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
