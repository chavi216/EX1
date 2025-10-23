import React from "react";

function Item2() {
  function startClock() {
    const clockElement = document.getElementById("clock-id");
    if (clockElement) {
      clockElement.innerText = new Date().toLocaleTimeString();
      setInterval(() => {
        clockElement.innerText = new Date().toLocaleTimeString();
      }, 1000);
    }
  }

  setTimeout(startClock, 0);

  return (
    <div className="clock">
      <h1>שעון</h1>
      <p id="clock-id"></p>
    </div>
  );
}

export default Item2;