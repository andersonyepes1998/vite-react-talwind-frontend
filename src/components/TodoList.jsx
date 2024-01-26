/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"
import { Droppable, Draggable} from '@hello-pangea/dnd';

// eslint-disable-next-line react/prop-types
const TodoList = ({todos, handleDelete, updateTodos}) => {
    return(
      <Droppable droppableId="todos">
        {
          (dropableProvider) => (
            <div 
              ref={dropableProvider.innerRef} 
              {...dropableProvider.droppableProps}
              className="bg-white rounded-t-md overflow-hidden mt-8 dark:bg-gray-800 transition-all duration-1000"
            >
              {todos.map((todo, index)=> (
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {
                    (dragableProvider) => (
                      <TodoItem
                        todo={todo} 
                        handleDelete={handleDelete}
                        updateTodos={updateTodos}
                        ref={dragableProvider.innerRef}
                            {...dragableProvider.dragHandleProps}
                            {...dragableProvider.draggableProps} 
                      />
                    )
                  }
                </Draggable>
              ))}
              {dropableProvider.placeholder}
            </div>
          )
        }
      </Droppable>
    )
}

export default TodoList