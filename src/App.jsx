import { useState } from "react";
import Pomodoro from "./Components/Pomodoro";
import AddPomodoro from "./Components/AddPomodoro";
export default function App() {
  const [timers, setTimers] = useState([Date.now()]);

  function addTimer() {
    setTimers([...timers, Date.now()]);
  }

  function deleteTimer(id) {
    setTimers((prev) => prev.filter((t) => t !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Pomodoro Timer
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {timers.map((id) => (
          <Pomodoro key={id} onDelete={() => deleteTimer(id)} />
        ))}

        <AddPomodoro onAdd={addTimer} />
      </div>
    </div>
  );
}
