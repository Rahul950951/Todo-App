import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(index));
  };

  const handleEdit = () => {
    const newTask = prompt('Edit your task:', task);
    if (newTask) {
      dispatch(editTask(index, newTask));
    }
  };

  return (
    <div>
      <span>{task}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
