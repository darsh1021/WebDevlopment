
import './App.css';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import Button from './components/Button';
import { Component } from 'react';

function App() {
  return (
     <div className="todo-container">
      <Header/>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <Button></Button>
     </div>
  );
}

export default App;
