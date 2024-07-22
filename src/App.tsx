// src/App.tsx
import { useState } from "react";
import Task from "./task";
import { generateTasksPDF } from "./utils/pdfUtils";

export interface TaskType {
  Id: number;
  task: string;
}

function App() {
  const [taskInput, settaskInput] = useState<string>("");
  const [id, setId] = useState<number | null>(null);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleInput = () => {
    if (taskInput.trim() === "") return;

    setTasks((prev) => [
      ...prev,
      { Id: new Date().getTime(), task: taskInput },
    ]);
    setId(null);
    settaskInput("");
  };

  const handleDelete = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.Id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <input
        type="text"
        className="h-10 border-2 border-black px-2"
        placeholder="Enter task here"
        value={taskInput}
        onChange={(e) => settaskInput(e.target.value)}
      />
      <input
        type="number"
        className="h-10 border-2 border-black px-2"
        placeholder="id"
        value={id ?? ""}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={handleInput}
      >
        Add Task
      </button>
      {tasks.map((task) => (
        <Task
          key={task.Id}
          Id={task.Id}
          task={task.task}
          handleDelete={handleDelete}
        />
      ))}
      {generateTasksPDF(
        tasks.map((task) => ({ task: task.task, id: task.Id }))
      )}
    </>
  );
}

export default App;
