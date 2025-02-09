import PropTypes from 'prop-types';

const TodoItem = ({ todo, deleteTodo, setEditTodo }) => {
  return (
    <div className='todo-item-container'>
      <li className="todo-item">
        <span>{todo.task}</span>
        <div>
          <button onClick={() => setEditTodo(todo)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setEditTodo: PropTypes.func.isRequired,
};

export default TodoItem;