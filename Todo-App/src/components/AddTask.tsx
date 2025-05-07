import axios from "axios";
import { useState } from "react";



const AddTask = () => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => {
      location.reload()
      console.log(result)
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
