import CostForm from "./CostForm";
import "./NewCost.css";
import { v4 as uuidv4 } from "uuid";

function NewCost(props) {
  function SaveCostDataHandler(value) {
    const CostData = {
      ...value,
      id: uuidv4(),
    };
    props.onCostData(CostData);
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={SaveCostDataHandler}></CostForm>
    </div>
  );
}

export default NewCost;
