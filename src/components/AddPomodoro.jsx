export default function AddPomodoro({ onAdd }) {
  return (
    <div
      onClick={onAdd}
      className="w-80 h-80 rounded-3xl border-2 border-dashed
                 border-indigo-300 flex items-center justify-center
                 text-6xl text-indigo-400 cursor-pointer
                 transition hover:scale-105 hover:bg-indigo-50"
    >
      +
    </div>
  );
}
