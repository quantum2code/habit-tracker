import React, { useState } from "react";

function ProgressTracker() {
  const [habits, setHabits] = useState([
    { name: "Exercise", done: false },
    { name: "Study", done: false },
    { name: "Read", done: false }
  ]);

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].done = !updatedHabits[index].done;
    setHabits(updatedHabits);
  };

  const total = habits.length;
  const completed = habits.filter(h => h.done).length;
  const percent = Math.round((completed / total) * 100);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Habit Tracker</h2>

      {/* Progress Bar */}
      <div style={{
        width: "100%",
        background: "#ddd",
        borderRadius: "10px",
        margin: "20px 0"
      }}>
        <div style={{
          height: "20px",
          width: percent + "%",
          background: "green",
          borderRadius: "10px",
          textAlign: "center",
          color: "white"
        }}>
          {percent}%
        </div>
      </div>

      {/* Habits */}
      {habits.map((habit, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <input
            type="checkbox"
            checked={habit.done}
            onChange={() => toggleHabit(index)}
          />
          {" "}{habit.name}
        </div>
      ))}
    </div>
  );
}

export default ProgressTracker;