import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TaskItem from "./Components/TaskItem";

function App() {

  return (
    <div>
      <AppName />
      <AddTodo />
      <TaskItem />
      <TaskItem />
    </div>
  );
}

export default App;
