import { Todo } from '../types/todos'

interface TodoSummaryProps {
  todos: Todo[]
  deleteAllCompleted: () => void
}

const TodoSummary = ({ todos, deleteAllCompleted }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium text-white">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all todos
        </button>
      )}
    </div>
  )
}

export default TodoSummary
