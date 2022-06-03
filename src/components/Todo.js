import React, { Fragment } from 'react';
import TodoData from './TodoData';

const Todo = ({ items }) => {

  return (
    <Fragment>
      {items.map(item => <TodoData key={item.id} title={item.title} completed={item.completed} />)}
    </Fragment>
  );
};

export default Todo;