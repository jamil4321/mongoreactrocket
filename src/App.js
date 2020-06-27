import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import { GlobalProvider } from './contextApi/GlobalState';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
function App() {
  return (

    <GlobalProvider>
      <Navbar />
      <AddTodo/>
      <TodoList />
    </GlobalProvider>
  );
}

export default App;
