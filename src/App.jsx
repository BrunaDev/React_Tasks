import React, { useState } from 'react';
import { v4 as uuiv4 } from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Tasks from './components/Tasks';
import AddTask from './components/add/AddTask';
import Header from './components/header/Header';
import TaskDetails from './components/detail/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      return storedTasks || [];
    } catch (error) {
      console.error('Error parsing tasks from Local Storage:', error);
      return [];
    }
  });
  const [taskDescription, setTaskDescription] = useState("");

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {... task, completed: !task.completed}

      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    if (taskTitle.trim() !== "") {
      const newTasks = [... tasks, {
        title: taskTitle,
        id: uuiv4(),
        completed: false,
        description: "",
      },]
      setTasks(newTasks);

      localStorage.setItem('tasks', JSON.stringify(newTasks));
    } else {
      return
    }
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleTaskDescriptionChange = (newDescription) => {
    setTaskDescription(newDescription);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route 
            path='/'
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path='/:taskTitle' exact element={<TaskDetails handleTaskDescriptionChange={handleTaskDescriptionChange} />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;