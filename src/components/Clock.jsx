import { useEffect, useState } from "react";

const DAYS   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getGreeting(hours) {
  if (hours >= 5  && hours < 12) return "Good Morning";
  if (hours >= 12 && hours < 17) return "Good Afternoon";
  if (hours >= 17 && hours < 21) return "Good Evening";
  return "Good Night";
}

function padZero(n) {
  return (n < 10 ? "0" : "") + n;
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours    = time.getHours();
  const minute   = time.getMinutes();
  const second   = time.getSeconds();
  const meridian = hours >= 12 ? "PM" : "AM";
  const h12      = hours % 12 || 12;

  const timeStr    = `${padZero(h12)}:${padZero(minute)}:${padZero(second)} ${meridian}`;
  const dateStr    = `${DAYS[time.getDay()]}, ${MONTHS[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
  const greeting   = getGreeting(hours);

  return (
    <div className="flex items-center justify-between w-full px-6 py-15 m-10">

      {/* Greeting */}
      <span className="font-mono text-[11px] font-bold tracking-[0.12em] text-teal">
        {greeting} 👋
      </span>

      {/* Date */}
      <span className="font-mono text-[11px] font-bold tracking-[0.12em] text-muted">
        {dateStr}
      </span>

      {/* Time */}
      <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-muted">
        {timeStr}
      </span>

    </div>
  );
}

export default Clock;
