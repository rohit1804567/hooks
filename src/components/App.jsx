import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  // console.log(time);
  setInterval(updateTime, 1000);
  const [currTime, setCount] = useState(time);

  function updateTime() {
    time = new Date().toLocaleTimeString();
    setCount(time);
  }

  return (
    <div>
      <h1>{currTime}</h1>
      <button onClick={updateTime}> Get Time </button>
    </div>
  );
}

export default App;
