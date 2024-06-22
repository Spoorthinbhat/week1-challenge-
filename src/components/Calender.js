import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import DateData from "./DateData";

export default function Calender({ selectedDate, setSelectedDate }) {
  return (
    <div className="Calender-blue">
      <div className="Calender-covering">
        <div className="month-year-bar">
          <div id="month-year">JUNE 2024</div>
          <div id="arrow">
            <FaLessThan id="left"></FaLessThan>
            <FaGreaterThan id="right"></FaGreaterThan>
          </div>
        </div>
        <div className="Calender-white">
          <DateData
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          ></DateData>
        </div>
      </div>
    </div>
  );
}
