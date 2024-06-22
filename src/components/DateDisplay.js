import React from "react";

export default function DateDisplay({ selectedDate }) {
  return (
    <div className="date-day-year">
      <div className="date-number">{selectedDate}</div>
      <div className="day-year">
        <div className="date-day">July</div>
        <div className="date-year">2024</div>
      </div>
    </div>
  );
}
