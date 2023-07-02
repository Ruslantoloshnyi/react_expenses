import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2022, 2, 12),
    name: "Refregerator",
    price: 90,
  },
  {
    id: 2,
    date: new Date(2022, 4, 16),
    name: "Phone",
    price: 100,
  },
  {
    id: 3,
    date: new Date(2022, 4, 20),
    name: "Table",
    price: 30,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  function addCostData(value) {
    setCosts((prevCosts) => {
      return [value, ...prevCosts];
    });
  }

  return (
    <div>
      <NewCost onCostData={addCostData}></NewCost>
      <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
