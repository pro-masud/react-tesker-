import { useState } from "react";
import ActionTask from "./ActionTask";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TasksBoard = () => {
  const defaultTasks = {
    title: "react learing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, asperiores?",
    tags: ["react", "node", "php"],
    priority: "High",
    isFibarate: false,
  };

  const [tasks, setTask] = useState([defaultTasks]);

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksBoard;
