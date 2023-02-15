import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <PrimaryButton handleClick={incrementCount}>
      The count is {count}
    </PrimaryButton>
  );
}
