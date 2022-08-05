import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BottomNotification from "./bottom-notification";

import Form from "./form";
import List from "./list";

export type Task = { id: string; label: string; isCompleted: boolean };

export type TaskStatus = "all" | "active" | "completed";

const todoData = [
  { id: "1", label: "Complete online JavaScript course", isCompleted: true },
  { id: "2", label: "Jog around the park 3x", isCompleted: false },
  { id: "3", label: "10 minutes meditation", isCompleted: false },
  { id: "4", label: "Read for 1 hour", isCompleted: false },
  { id: "5", label: "Pick up groceries", isCompleted: false },
  {
    id: "6",
    label: "Complete Todo App on Frontend Mentor",
    isCompleted: false,
  },
];

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>(todoData);
  const [taskStatus, setTaskStatus] = useState<TaskStatus>("all");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    const handleFilter = (task: Task) => {
      if (taskStatus === "active") return !task.isCompleted;
      if (taskStatus === "completed") return task.isCompleted;
      else return task;
    };

    const filterTasks = () => {
      const filteredTasks = tasks.filter((task) => handleFilter(task));

      setFilteredTasks(filteredTasks);
    };

    filterTasks();
  }, [tasks, taskStatus]);

  const addNewTask = (label: string) => {
    const newTask = { id: uuidv4(), label, isCompleted: false };

    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(updatedTasks);
  };

  const updateFilterStatus = (status: TaskStatus) => {
    setTaskStatus(status);
  };

  const updateTaskOrder = (newOrder: Task[]) => {
    setTasks(newOrder);
  };

  const activeTasksLength = tasks.filter((task) => !task.isCompleted).length;

  return (
    <div>
      <Form addNewTask={addNewTask} />

      <List
        activeTasksLength={activeTasksLength}
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        clearCompletedTasks={clearCompletedTasks}
        updateFilterStatus={updateFilterStatus}
        taskStatus={taskStatus}
        updateTaskOrder={updateTaskOrder}
      />

      <BottomNotification />
    </div>
  );
};

export default Todo;
