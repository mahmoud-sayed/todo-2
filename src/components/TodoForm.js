import React from 'react';

const TodoForm = ({ newTodo, setNewTodo, handelSubmit }) => {


  return (
    <form className='todo-form' onSubmit={(e) => handelSubmit(e)}>
      <input
        placeholder='Add New Task...'
        name='text'
        className='todo-input'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='todo-button'>Add</button>
    </form>
  );
};

export default TodoForm;