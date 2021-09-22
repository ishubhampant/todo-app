import Todo from "./Todo";

const TodoList = ({ todoItems, setTodoItems, filteredItems,setInputText ,setInputTextID}) => {
  return (
    <div className="todo-container">
      <ol className="todo-list">
        {filteredItems.map((todo) => (
          <Todo
            setTodoItems={setTodoItems}
            todoItems={todoItems}
            key={todo.id}
            todo={todo}
            text={todo.text}
            setInputText={setInputText}
            setInputTextID={setInputTextID}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
