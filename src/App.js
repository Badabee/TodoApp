import './App.css';
import { useState } from "react";
import Task from "./Components/task/task";
import Footer from "./Components/footer";

function App() {
  const [task, setTasks] = useState([]);
  const [todo, setTodo] = useState({
    todo: "",
    completed: false
  });

  const addTask = (todo) => {
    let temp = task;
    let _task = {
      todo: todo,
      completed: false
    }
    temp.push(_task);

    setTasks(temp);
    setTodo({
      todo: "",
      completed: false
    })
  }

  return (
    <div className="App">
      <h1 className="todo">TODO APP</h1>
      <input className="box" required placeholder="Enter your Todo here" value={todo.todo} onChange={(event) => setTodo(event.target.value)} />
      <button className="grow" onClick={() => addTask(todo)}>grow</button>
      <div className="tasks">
        <div className="items">
          <Task tasks={task} />
          <Footer tasks={task} />
        </div>
      </div>

    </div>


  );
}

export default App;
