import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {


  const [items, setItems] = useState([]); //to set main data I get from API
  const [title, setNewTitle] = useState('');//values coming from the form

  //data URl
  const DATA_URL = 'http://localhost:200/data';

  const itemsLength = items.length; // to refetch data when data increased or decreased in db
  //fitch data from server
  useEffect(() => {

    (async function fetchData() {
      const response = await axios.get(DATA_URL);
      setItems(response.data);
    })();
  }, [itemsLength]);


  // handel create function
  const handelCreate = async () => {
    if (title.length < 2) { // check if there is data in the input or not
      alert('please enter write more than 2 characters');
    } else if (items.length === 0) { // if there is no data in db it will create new id=1
      const id = 1;
      const newRecord = { id, title, completed: false };
      setItems([newRecord]);
      await axios.post(DATA_URL, newRecord);
      setNewTitle('');
    } else {
      const id = items[items.length - 1].id + 1;
      const newRecord = { id, title, completed: false };
      setItems([...items, newRecord]);
      await axios.post(DATA_URL, newRecord);
      setNewTitle('');
    }

  };

  // handel delete function

  // handel edit function

  // handel submit function
  const handelSubmit = (e) => {
    e.preventDefault();
    handelCreate();//create new record function
  };

  return (
    <Fragment>
      <h1>What are your tasks for the day?</h1>
      <TodoForm newTodo={title} setNewTodo={setNewTitle} handelSubmit={handelSubmit} />
      <Todo items={items} />
    </Fragment>
  );
}

export default TodoList;