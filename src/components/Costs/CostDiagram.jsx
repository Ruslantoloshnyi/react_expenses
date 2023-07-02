import Diagram from "../Diagram/Diagram";

function CostDiagram(props) {
  const diagramDataSets = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "nov", value: 0 },
    { label: "oct", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value += cost.price;
  }

  return <Diagram dataSets={diagramDataSets}></Diagram>;
}

export default CostDiagram;