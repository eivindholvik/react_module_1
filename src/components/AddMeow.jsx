import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

export default function AddMeow(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [status, setStatus] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const inputCat = {
      name: name,
      age: age,
      status: status,
    };

    props.setCats((prevState) => {
      return [...prevState, inputCat];
    });

    setAge(0);
    setName("");
    setStatus("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input value={name} type="text" id="name" onChange={handleNameChange} />
      <label htmlFor="age">Age: </label>
      <input value={age} type="number" id="age" onChange={handleAgeChange} />
      <label htmlFor="status">Status: </label>
      <input
        value={status}
        type="text"
        id="status"
        onChange={handleStatusChange}
      />
      <button type="submit">Click me</button>
    </form>
  );
}
