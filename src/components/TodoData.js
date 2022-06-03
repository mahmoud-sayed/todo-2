import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from 'react-icons/ai';


const TodoData = ({ title, completed }) => {

  return (
    <div className={completed ? 'todo-row complete' : 'todo-row'}>
      <div >
        {title}
      </div>
      <div className='icons'>
        <AiFillCloseCircle className='delete-icon' />
        <AiFillEdit className='edit-icon' />
      </div>
    </div>
  );
};

export default TodoData;