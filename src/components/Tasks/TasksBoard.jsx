import { useState } from "react";
import ActionTask from "./ActionTask";
import AddTaskModel from "./AddTaskModel";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";
import NoTask from "./noTask";

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

  // Task Delete
  const handlDeleteTask = (deleteTaskID) => {
    const updateTask = tasks.filter(
      (singleTask) => singleTask.id !== deleteTaskID
    );

    setTask(updateTask);
  };

  // delete all task here
  const handlDeleteAllTask = () => {
    tasks.length = 0;
    setTask([...tasks]);
  };

  // Fibarate toggler function
  const handlAddFibarate = (taskId) => {
    const tasksID = tasks.findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];
    newTasks[tasksID].isFibarate = !newTasks[tasksID].isFibarate;
    setTask(newTasks);
  };

  // Search Task
  const handlSearchTitle = (searchTitle) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    setTask([...filteredTasks]);
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
            <SearchTask onSearch={handlSearchTitle} />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask
              AddModul={() => setShowAddModel(true)}
              deleteAllTask={handlDeleteAllTask}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdite={handlEditTask}
                onDelete={handlDeleteTask}
                addFav={handlAddFibarate}
              />
            ) : (
              <NoTask />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksBoard;
