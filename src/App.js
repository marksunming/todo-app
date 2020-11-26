import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("todos").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      })))
    });
  },[]);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Todo app</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>

        <Button disabled={!input} 
          type='submit' onClick={addTodo}
          variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      

      <ul>
        {
          todos.map(todo => (
            <Todo key={todo.id} todo={todo.data} id={todo.id} />
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;
