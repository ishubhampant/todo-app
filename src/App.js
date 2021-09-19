import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [flag, setFlag] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line
  }, [todoItems, flag]);

  const filterHandler = () => {
    switch (flag) {
      case "completed":
        setFilteredItems(todoItems.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredItems(todoItems.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredItems(todoItems);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        setInputText={setInputText}
        setFlag={setFlag}
      />
      <TodoList
        setTodoItems={setTodoItems}
        todoItems={todoItems}
        filteredItems={filteredItems}
      />
    </div>
  );
}

export default App;
