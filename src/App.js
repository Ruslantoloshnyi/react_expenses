import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      discription: "Refregerator",
      amount: 90,
    },
    {
      date: new Date(2021, 4, 16),
      discription: "Phone",
      amount: 100,
    },
    {
      date: new Date(2021, 4, 20),
      discription: "Table",
      amount: 30,
    },
  ];

  function addCostData(value) {
    console.log(value);
  }

  return (
    <div>
      <NewCost onCostData={addCostData}></NewCost>
      <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
