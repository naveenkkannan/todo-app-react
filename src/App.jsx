

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import MainTaskContainer from "./components/MainTaskContainer";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && Array.isArray(storedTodos)) {
      setTodos(storedTodos);
    }
  }, []); 

  useEffect(() => {
  
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal.trim()]);
      setInputVal('');
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) => 
      prevTodos.filter((_, prevTodosIndex) => prevTodosIndex !== todoIndex)
    );
  }

  return (
    <>
      <Navbar />
      <Task writeTodo={writeTodo} inputVal={inputVal} addTodo={addTodo} />
      <MainTaskContainer todos={todos} delTodo={delTodo} />
      <Footer />
    </>
  );
}

export default App;
