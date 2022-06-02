import React from 'react';

const TodoForm = () => {


  return (
    <form className='todo-form'>
      {/* {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : ( */}
      <>
        <input
          placeholder='Adicionar tarefa...'

          name='text'
          className='todo-input'

        />
        <button className='todo-button'>
          Adicionar
        </button>
      </>
      {/* )} */}
    </form>
  );
};

export default TodoForm;