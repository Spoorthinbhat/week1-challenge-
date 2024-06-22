import React from "react";

// import React, { useState } from "react";

export default function DateData({ selectedDate, setSelectedDate }) {
  const handleClick = (e) => {
    setSelectedDate(e.target.id);
    console.log(e.target.id);
  };

  const weekdays = ["Mo", "Tu", "We", "Tu", "Fr", "Sa", "Su"];
  const Num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const Nextmon = [1, 2, 3, 4];

  return (
    <>
      {weekdays.map((days) => {
        return (
          <div className="date day" key={days}>
            {days}
          </div>
        );
      })}
      {Num.map((number) => {
        return (
          <div
            className={
              selectedDate === number.toString() ? "date bluecolor" : "date"
            }
            id={number}
            key={number}
            onClick={(e) => handleClick(e)}
          >
            {number}
          </div>
        );
      })}

      {Nextmon.map((number) => {
        return (
          <div className="date next" key={number} id={number}>
            {number}
          </div>
        );
      })}
    </>
  );
}
