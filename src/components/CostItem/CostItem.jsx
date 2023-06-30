import "./CostItem.css";
import CostDate from "../CostDate/CostDate";

function CostItem() {
  return (
    <div className="cost-item">
      <CostDate></CostDate>
      <div className="cost-item__description">
        <h2>Refrigerator</h2>
        <div className="cost-item__price">1000$</div>
      </div>
    </div>
  );
}

export default CostItem;
