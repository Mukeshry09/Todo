import { useState } from 'react'

function TodoForm({ addTask }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.trim()) return

    addTask(input)
    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm