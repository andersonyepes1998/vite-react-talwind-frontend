/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

// eslint-disable-next-line react/prop-types
const TodoList = ({todos, handleDelete, updateTodos}) => {
    return(
        <div className="bg-white rounded-t-md overflow-hidden mt-8 dark:bg-gray-800 transition-all duration-1000">
          {todos.map((todo)=> (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              handleDelete={handleDelete}
              updateTodos={updateTodos}
            />
          ))}
        </div>
    )
}

export default TodoList