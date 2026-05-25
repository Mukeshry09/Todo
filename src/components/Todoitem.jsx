import { useState } from 'react'

function TodoItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(task.text)

  const handleEdit = () => {
    editTask(task.id, newText)
    setIsEditing(false)
  }

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span className={task.completed ? 'completed' : ''}>
            {task.text}
          </span>
        )}
      </div>

      <div className="buttons">
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem