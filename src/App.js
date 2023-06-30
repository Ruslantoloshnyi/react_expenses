import Costs from "./components/Costs/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      discraption: "Refregerator",
      amount: 90,
    },
    {
      date: new Date(2021, 4, 16),
      discraption: "Phone",
      amount: 100,
    },
    {
      date: new Date(2021, 4, 20),
      discraption: "Table",
      amount: 30,
    },
  ];

  return (
    <div>
      <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
