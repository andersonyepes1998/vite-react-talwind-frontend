import CrossIcon from "./icons/CrossIcon"
import IconCheck from "./icons/IconCheck";

 // eslint-disable-next-line react/prop-types
 const TodoItem = ({todo, handleDelete, updateTodos}) =>{

  // eslint-disable-next-line react/prop-types
  const {id ,title, completed} = todo;

    return(
        <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className= {`border-2 w-5 h-5 rounded-full ${completed ? " flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center line-through" : "inline-block"}`} onClick={() => updateTodos(id)}>
              {
                completed && <IconCheck/>
              }
            </button>
            <p className={`grow text-gray-600 dark:text-gray-300 ${completed && "line-through"}`}>{title}</p>
            <button className="flex-none" onClick={()=> handleDelete(id)}>
              <CrossIcon/>
            </button>
        </article>
    )
 }

 export default TodoItem