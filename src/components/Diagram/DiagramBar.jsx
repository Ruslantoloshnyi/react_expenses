import "./DiagramBar.css";

function DiagramBar(props) {
  let barFillHeight = "0%";

  if (barFillHeight > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          style={{ height: barFillHeight }}
          className="diagram-bar__fill"
        ></div>
      </div>
      <div className="diagram-bar__label"></div>
    </div>
  );
}

export default DiagramBar;
