import React, {useState, useEffect} from 'react';
import './App.css';
import TodosForm from './Components/TodoForm'
import TodoList from './Components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list=todos"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
        setTodos(storageTodos)
    }
  },[])

  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
 },[todos])

  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }

   
  return (
    <div className="App">
      <p>React Todo</p>
      <TodosForm addTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
