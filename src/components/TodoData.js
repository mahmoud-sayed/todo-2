import React, { useState } from 'react';
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";


const TodoData = ({ title, completed, id, handelDelete, handelEdit, handelEditSubmit, setEditedTitle, editedTitle }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={completed ? 'todo-row complete' : 'todo-row'}>
      {isEdit === true ?
        <form onSubmit={(e) => { handelEditSubmit(e); setIsEdit(false); }} className='edit-group'>
          <input type='text' className='todo-input' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <button className='todo-button' type='submit'>Edit</button>
        </form>
        :
        <div >
          {title}
        </div>
      }
      <div className='icons'>
        <AiFillCloseCircle className='delete-icon' onClick={() => handelDelete(id)} />
        <AiFillEdit className='edit-icon' onClick={() => { setIsEdit(true); handelEdit(id); }} />
      </div>
    </div>
  );
};

export default TodoData;