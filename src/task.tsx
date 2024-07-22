import { TaskType } from "./App";

interface TaskProps extends TaskType {
  handleDelete: (id: number) => void;
}

const Task = ({ Id, task, handleDelete }: TaskProps) => {
  return (
    <div className="flex ">
      <div className="text-white bg-black rounded-md h-10 my-auto">{task}</div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Edit
      </button>
      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => handleDelete(Number(Id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
