import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))

    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  // Edit task
  const editTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    )
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  return (
    <div className="app">
      <div className="container">
        <Header />

        <TodoForm addTask={addTask} />

        <div className="filter-buttons">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>
            Completed
          </button>
          <button onClick={() => setFilter('pending')}>
            Pending
          </button>
        </div>

        <TodoList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />

        <Footer total={tasks.length} />
      </div>
    </div>
  )
}

export default App
