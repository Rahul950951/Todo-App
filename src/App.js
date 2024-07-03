import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import StoreProvider from './redux/store';
import './styles/App.css';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </StoreProvider>
  );
}

export default App;
