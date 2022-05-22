import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handelAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), todo: todo, done: false }])
      setTodo('')
    }
  }
  return (
    <div className="App">
      <h1 className="heading">Tackify</h1>
      <InputField todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
