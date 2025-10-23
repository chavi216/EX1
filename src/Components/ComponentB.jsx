import { useState, useEffect } from 'react'


function Item2() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // ניקוי ה-interval כשהרכיב מתפרק
  }, []);

  return (
   <div className="clock">
      <h1>שעון</h1>
      <div>{time}</div>
    </div>
  );
}

export default Item2;