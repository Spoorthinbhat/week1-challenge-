import React from "react";
import DateDisplay from "./DateDisplay";
import List from "./List";
export default function TaskDisplay({ selectedDate, setSelectedDate }) {
  return (
    <div>
      <div className="Taskdisplay">
        <div className="Datecontainer">
          <DateDisplay selectedDate={selectedDate}></DateDisplay>
        </div>
        <List selectedDate={selectedDate}></List>
      </div>
    </div>
  );
}
