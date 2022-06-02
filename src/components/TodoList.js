import React, { Fragment } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

  return (
    <Fragment>
      <h1>What are your tasks for the day?</h1>
      <TodoForm />
      <Todo />
    </Fragment>
  );
}

export default TodoList;