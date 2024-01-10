import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoCreate = ({createTodos}) =>{

  const [title, setTitle ]= useState('');

  const handleSubmitTodos = (e) => {
    e.preventDefault();
    if(!title.trim()) {
      return setTitle('');
    }

    createTodos(title);
    setTitle('');
  }

    return(
        <form 
          onSubmit={handleSubmitTodos} 
          className="bg-white dark:bg-gray-800 rounded-md overflow-hidden py-4 flex items-center gap-4 px-4 mt-8 transition-all duration-1000"
        >
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input 
            type="text" 
            placeholder="Create a new TODO..."
            className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    )
}

export default TodoCreate