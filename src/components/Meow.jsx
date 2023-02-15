import { useState } from "react";
import AddMeow from "./AddMeow";

//remember that using age as key is NOT good!

const startCats = [
  {
    name: "Sprinkels",
    age: 23,
    status: "Dead by freezer",
  },
  {
    name: "Pia",
    age: 21,
    status: "Dead by old age",
  },
  {
    name: "Khan",
    age: 2,
    status: "Alive and killing",
  },
];

export default function Meow() {
  const [cats, setCats] = useState(startCats);

  return (
    <div className="Meows">
      <AddMeow setCats={setCats} />
      <ul>
        {cats.map((cat) => {
          return (
            <li key={cat.age}>
              {cat.name} is {cat.status}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
