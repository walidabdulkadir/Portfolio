import { useEffect, useState } from "react";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getGreeting(hours) {
  if (hours >= 5 && hours < 12) return "Good Morning";
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

  const hours = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const meridian = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;

  const timeStr = `${padZero(h12)}:${padZero(minute)}:${padZero(second)} ${meridian}`;
  const dateStr = `${DAYS[time.getDay()]}, ${MONTHS[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
  const greeting = getGreeting(hours);

  return (
    <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-1 px-2 py-1 sm:px-4">
      {/* Greeting */}
      <span className="order-1 whitespace-nowrap font-mono text-[10px] font-bold tracking-[0.08em] text-teal sm:text-[11px] sm:tracking-[0.12em]">
        {greeting}
      </span>

      {/* Date */}
      <span className="order-3 basis-full whitespace-nowrap text-center font-mono text-[9px] font-bold tracking-[0.06em] text-muted min-[420px]:order-2 min-[420px]:basis-auto min-[420px]:text-left sm:text-[11px] sm:tracking-[0.12em]">
        {dateStr}
      </span>

      {/* Time */}
      <span className="order-2 whitespace-nowrap font-mono text-[10px] font-bold tracking-[0.08em] text-muted min-[420px]:order-3 sm:text-[11px] sm:tracking-[0.15em]">
        {timeStr}
      </span>
    </div>
  );
}

export default Clock;
