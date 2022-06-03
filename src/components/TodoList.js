import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

  //to set main data I get from API
  const [items, setItems] = useState([]);

  //data URl
  const DATA_URL = 'http://localhost:200/data';
  //fitch data from server
  useEffect(() => {

    (async function fetchData() {
      const response = await axios.get(DATA_URL);
      setItems(response.data);
    })();
  }, []);


  // handel create function

  // handel delete function

  // handel edit function

  return (
    <Fragment>
      <h1>What are your tasks for the day?</h1>
      <TodoForm />
      <Todo items={items} />
    </Fragment>
  );
}

export default TodoList;