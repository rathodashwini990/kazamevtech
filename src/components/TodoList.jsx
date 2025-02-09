import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, setEditTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          setEditTodo={setEditTodo} 
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setEditTodo: PropTypes.func.isRequired,
};

export default TodoList;