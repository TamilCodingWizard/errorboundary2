import { useState } from "react";

export default function Message({ message, onSubmit }) {
  const [data, setData] = useState(message);
  const [crash, setCrash] = useState(false);

  function handleChange(e) {
    setData(e.target.value);
    console.log(data)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data)

    if (data === "crash") {
      setCrash(true);
    }
    onSubmit(data);
    setData("");
  }

  if (crash) throw { message: "CRASHED!" }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={data} onChange={handleChange} placeholder="Type here" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}