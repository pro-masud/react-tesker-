import { useState } from "react";
import ActionTask from "./ActionTask";
import AddTaskModel from "./AddTaskModel";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TasksBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "react learing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, asperiores?",
    tags: ["react", "node", "php"],
    priority: "High",
    isFibarate: true,
  };

  const [showAddModel, setShowAddModel] = useState(false);
  const [tasks, setTask] = useState([defaultTasks]);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handlSingleTask = (addNewTask, addTask) => {
    console.log(addTask);
    if (addTask) {
      setTask([...tasks, addNewTask]);
    } else {
      setTask(
        tasks.map((task) => {
          if (task.id === addNewTask.id) {
            return addNewTask;
          }
          return task;
        })
      );
    }
    setShowAddModel(false);
    setTaskToUpdate(null);
  };

  // Edite Task
  const handlEditTask = (editeTask) => {
    setTaskToUpdate(editeTask);
    setShowAddModel(true);
  };

  const handlCloseModul = () => {
    setShowAddModel(false);
    setTaskToUpdate(null);
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModel && (
          <AddTaskModel
            closeModel={handlCloseModul}
            onSave={handlSingleTask}
            editeTask={taskToUpdate}
          />
        )}
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask AddModul={() => setShowAddModel(true)} />
            <TaskList tasks={tasks} onEdite={handlEditTask} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksBoard;
