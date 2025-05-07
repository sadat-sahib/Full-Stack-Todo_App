import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TodoList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4 text-center">Todo List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodoList;
