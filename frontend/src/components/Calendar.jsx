import { useState, useEffect } from "react";

export default function Calendar({ bookedDates, selectedDate, setSelectedDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get year and month
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // First day & total days
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Generate days array
  let days = [];
  for (let i = 1; i <= totalDays; i++) {
    const dateObj = new Date(year, month, i);
    const iso = dateObj.toISOString().split("T")[0];

    days.push({
      day: i,
      iso,
      disabled: bookedDates.includes(iso),
    });
  }

  const nextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(month + 1);
    setCurrentMonth(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(month - 1);
    setCurrentMonth(newDate);
  };

  return (
    <div className="bg-white border rounded-xl p-5 shadow-md">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-xl" onClick={prevMonth}>←</button>

        <h2 className="font-semibold text-lg">
          {currentMonth.toLocaleString("default", { month: "long" })} {year}
        </h2>

        <button className="text-xl" onClick={nextMonth}>→</button>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center font-medium text-muted mb-2">
        <span>Sun</span><span>Mon</span><span>Tue</span>
        <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>

      {/* CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Empty boxes before day-1 */}
        {Array(firstDay).fill("").map((_, i) => (
          <div key={i}></div>
        ))}

        {/* Days */}
        {days.map((d) => (
          <button
            key={d.iso}
            disabled={d.disabled}
            onClick={() => setSelectedDate(d.iso)}
            className={`
              p-2 rounded-lg border
              ${d.disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-accent/10"}
              ${selectedDate === d.iso ? "bg-accent text-white border-accent" : ""}
            `}
          >
            {d.day}
          </button>
        ))}
      </div>
    </div>
  );
}
