import { useState, useEffect, useRef } from "react";

export default function Pomodoro({ onDelete }) {
  const FOCUS = 25 * 60;
  const BREAK = 5 * 60;

  const [time, setTime] = useState(FOCUS);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState("FOCUS");

  const cardRef = useRef(null);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          if (mode === "FOCUS") {
            setMode("BREAK");
            return BREAK;
          } else {
            setMode("FOCUS");
            return FOCUS;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running, mode]);

  function handleKeyDown(e) {
    if (e.key === "Delete" || e.key === "Backspace") {
      onDelete();
    }
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function reset() {
    setRunning(false);
    setMode("FOCUS");
    setTime(FOCUS);
  }

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative bg-white/90 backdrop-blur w-80 p-6 rounded-3xl shadow-xl
                 animate-card transition hover:-translate-y-2 hover:shadow-2xl
                 focus:outline-none focus:ring-4 focus:ring-indigo-300"
    >
      
      <button
        onClick={onDelete}
        className="absolute top-3 right-3 text-indigo-300 hover:text-rose-500 text-xl"
        title="Delete Timer (Delete key also works)"
      >
        ×
      </button>

      
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500
                      text-white rounded-full py-8 text-center shadow-lg">
        <div className="text-4xl font-mono font-bold">
          {minutes}:{seconds < 10 ? "0" : ""}{seconds}
        </div>
        <div className="mt-2 text-sm tracking-widest text-indigo-100">
          {mode}
        </div>
      </div>

      
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            setMode("FOCUS");
            setTime(FOCUS);
            setRunning(true);
          }}
          className={`px-4 py-2 rounded-full text-sm
            ${mode === "FOCUS"
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 text-indigo-600"}
            transition hover:brightness-110`}
        >
          Focus
        </button>

        <button
          onClick={() => {
            setMode("BREAK");
            setTime(BREAK);
            setRunning(true);
          }}
          className={`px-4 py-2 rounded-full text-sm
            ${mode === "BREAK"
              ? "bg-teal-500 text-white"
              : "bg-teal-100 text-teal-600"}
            transition hover:brightness-110`}
        >
          Break
        </button>
      </div>

      
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setRunning(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-full
                     transition active:scale-95 hover:brightness-110"
        >
          Start
        </button>

        <button
          onClick={reset}
          className="bg-amber-400 text-white px-4 py-2 rounded-full
                     transition active:scale-95 hover:brightness-110"
        >
          Reset
        </button>

        <button
          onClick={() => setRunning(false)}
          className="bg-rose-500 text-white px-4 py-2 rounded-full
                     transition active:scale-95 hover:brightness-110"
        >
          Stop
        </button>
      </div>

      
      <p className="text-xs text-center text-gray-400 mt-4">
        Click card → Press Delete / Backspace to remove
      </p>
    </div>
  );
}
