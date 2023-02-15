import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import MyProduct from "./components/MyProduct";
import Counter from "./components/Counter";
import Meow from "./components/Meow";

function App() {
  const myStockStatus = [
    { name: "Bread", stock: 1, id: 1 },
    { name: "Juice", stock: 12, id: 2 },
    { name: "Chips", stock: 0, id: 3 },
    { name: "New", stock: 13, id: 4 },
  ];

  return (
    <>
      <div className="App">
        <Meow />
        <h1> My first app</h1>
        <PrimaryButton handleClick={(e) => console.log(e)}>
          Click me!
        </PrimaryButton>
        <Counter />
        <Counter />
      </div>
      <ul>
        {myStockStatus.map((ele) => {
          return (
            <li key={ele.id}>
              <MyProduct productName={ele.name} stockValue={ele.stock} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
