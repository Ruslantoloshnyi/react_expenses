import { useState } from "react";
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

  const [clickShowForm, setCliskShowForm] = useState(false);

  function showForm() {
    setCliskShowForm(true);
  }

  function hideForm() {
    setCliskShowForm(false);
  }

  return (
    <div className="new-cost">
      {clickShowForm ? (
        <CostForm
          hideForm={hideForm}
          onSaveCostData={SaveCostDataHandler}
        ></CostForm>
      ) : (
        <div className="new-cost__actions show-form">
          <button onClick={showForm} type="submit">
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default NewCost;
