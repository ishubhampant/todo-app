const Todo = ({ text, todo, todoItems, setTodoItems,setInputText, setInputTextID }) => {
  const deleteHandler = () => {
    setTodoItems(todoItems.filter((el) => el.id !== todo.id));
  };
  const editHandler = (e) => {
    setInputText(todo.text);
    setInputTextID(todo.id)
    setTodoItems(todoItems.filter((el) => el.id !== todo.id));
  }
  const completeHandler = () => {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={editHandler} className="edit-btn">
      <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;
