import React from 'react';

const TodoForm = () => {


  return (
    <form className='todo-form'>
      <input
        placeholder='Adicionar tarefa...'
        name='text'
        className='todo-input'
      />
      <button className='todo-button'>Adicionar</button>
    </form>
  );
};

export default TodoForm;