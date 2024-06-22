import React, { useState } from "react";
import "./App.css";
import Calender from "./components/Calender";
import TaskDisplay from "./components/TaskDisplay";
function App() {
  const [selectedDate, setSelectedDate] = useState(2);

  return (
    <>
      <div className="container">
        <TaskDisplay
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></TaskDisplay>
        <Calender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></Calender>
      </div>

      {/* <DateDisplay
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></DateDisplay>
      <List selectedDate={selectedDate}></List> */}
    </>
  );
}

export default App;
