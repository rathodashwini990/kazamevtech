import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo, editTodo, updateTodo }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo.task);
    } else {
      setTask('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editTodo) {
      const newTodo = {
        id: Date.now(),
        task: task,
      };
      addTodo(newTodo);
    } else {
      updateTodo(editTodo.id, task);
    }

    setTask(''); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">{editTodo ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
  }),
  updateTodo: PropTypes.func.isRequired,
};

export default TodoForm;