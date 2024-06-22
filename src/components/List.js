import React, { useState } from "react";

export default function List({ selectedDate }) {
  const [newEntry, setNewEntry] = useState("");
  const [newTask, setNewTask] = useState([]);

  const handleInsert = () => {
    if (newEntry.trim() !== "") {
      if (newTask.some((item) => item.id === selectedDate)) {
        setNewTask(
          newTask.map((item) =>
            item.id === selectedDate
              ? { ...item, task: [...item.task, newEntry] }
              : item
          )
        );
      } else {
        // If the id is not present, add a new task
        setNewTask([...newTask, { id: selectedDate, task: [newEntry] }]);
      }
      setNewEntry("");
      console.log(newTask);
    }
  };

  return (
    <div>
      <div className="title-container">
        <div className="Title1">Today's Deadlines</div>

        {newTask.map(
          (item) =>
            item.id === selectedDate && (
              <div>
                <ul>
                  {item.task.map((entry) => (
                    <li className="task">{entry}</li>
                  ))}
                </ul>
              </div>
            )
        )}
      </div>
      <div className="Title1">Upcoming events</div>
      {newTask.map(
        (item) =>
          item.id !== selectedDate &&
          item.id > selectedDate && (
            <div>
              <ul>
                {item.task.map((entry) => (
                  <li className="task">{entry}</li>
                ))}
              </ul>
            </div>
          )
      )}
      <div className="insert">
        <input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        ></input>
        <button type="button" onClick={handleInsert}>
          insert
        </button>
      </div>
    </div>
  );
}
