import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  function padZero(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function formatTime() {
    let hours = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minute)}:${padZero(second)} ${meridian}`;
  }

  return (
    <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-muted">
      {formatTime()}
    </span>
  );
}

export default Clock;
