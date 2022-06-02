import React from 'react';

import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from 'react-icons/ai';

const Todo = () => {




  return (
    <div
      className='todo-row'
    // className={todo.isComplete ? 'todo-row complete' : 'todo-row'}

    >
      <div >

      </div>
      <div className='icons'>
        <AiFillCloseCircle

          className='delete-icon'
        />
        <AiFillEdit

          className='edit-icon'
        />
      </div>
    </div>
  );
};

export default Todo;