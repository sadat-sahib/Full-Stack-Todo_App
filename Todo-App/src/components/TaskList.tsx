import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the Task type
export interface Task {
  _id: string | number;
  task: string;
  done: boolean;
}

const TaskList: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get<Task[]>("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (id: string | number) => {
    console.log('id', id)
    axios
    .put<Task[]>(`http://localhost:3001/update/${id}`)
    .then((result) => {
      location.reload()
      console.log(result)
    })
    .catch((err) => console.error(err));
  }

  const onDelete = (id: number | string) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
    .then(result => {
      location.reload()
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  };
console.log(todos)
  return (
    <ul className="space-y-2">
      {todos.map((t) => (
        <li
          key={t._id}
          className="flex items-center justify-between p-2 border rounded"
        >
          <div className="flex items-center gap-2">
            {/* Optional checkbox */}
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => handleEdit(t._id)}
            />
            <span className={t.done ? "line-through text-gray-500" : ""}>
              {t.task}
            </span>
          </div>
          <button
            onClick={() => onDelete(t._id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
