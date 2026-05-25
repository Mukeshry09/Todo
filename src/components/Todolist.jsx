import TodoItem from './TodoItem'

function TodoList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  )
}

export default TodoList