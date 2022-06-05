import React, { Fragment } from 'react';
import TodoData from './TodoData';

const Todo = ({ items, handelDelete, handelEdit, setEditedTitle, setIsEdit, isEdit, handelEditSubmit, editedTitle }) => {

  return (
    <Fragment>
      {
        items.map(item =>
          <TodoData
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            handelDelete={handelDelete}
            handelEdit={handelEdit}
            setEditedTitle={setEditedTitle}
            editedTitle={editedTitle}

            handelEditSubmit={handelEditSubmit}
          />)
      }
    </Fragment>
  );
};

export default Todo;