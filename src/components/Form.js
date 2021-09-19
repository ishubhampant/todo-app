const Form = ({
  setInputText,
  todoItems,
  setTodoItems,
  inputText,
  setFlag,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodoItems([
      ...todoItems,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText("");
  };
  const statusHandler = (e) => {
    setFlag(e.target.value);
  };

  return (
    <form>
      <div className="form-block">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="Enter task"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select
          onChange={statusHandler}
          name="todoItems"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
