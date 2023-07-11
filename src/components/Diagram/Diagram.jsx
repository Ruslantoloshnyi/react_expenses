import DiagramBar from "./DiagramBar";
import "./Diagram.css";

function Diagram(props) {
  const dataSets = props.dataSets;
  const dataSetValue = dataSets.map(function (item) {
    return item.value;
  });

  const maxMonthCosts = Math.max(...dataSetValue);

  const arr = dataSets.map(function (item) {
    return (
      <DiagramBar
        key={item.label}
        value={item.value}
        maxValue={maxMonthCosts}
        label={item.label}
      ></DiagramBar>
    );
  });

  return <div className="diagram">{arr}</div>;
}

export default Diagram;
