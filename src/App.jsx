import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import TasksBoard from "./components/Tasks/TasksBoard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TasksBoard />
      <Footer />
    </>
  );
}

export default App;
