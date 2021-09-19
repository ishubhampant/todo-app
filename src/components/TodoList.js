import Todo from "./Todo";

const TodoList = ({ todoItems, setTodoItems, filteredItems }) => {
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
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
