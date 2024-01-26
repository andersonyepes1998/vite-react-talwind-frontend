import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";
import { DragDropContext } from '@hello-pangea/dnd';

const initialState =JSON.parse(localStorage.getItem('todos')) || [];

const App = () =>{

  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] =useState('all');

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));

  },[todos]);

  const createTodos = (title) => {
    const newData ={
      id: Date.now(),
      title,
      completed:false
    }

    setTodos([...todos, newData]);
  }

  const handleDelete = (id) => {
    const newArrays = todos.filter((item) => item.id !== id);
    setTodos(newArrays);
  }

  const updateTodos = (id) => {
    const newData = todos.map((item) => item.id === id ? {...item, completed: !item.completed} : item);
    setTodos(newData);
  }

  const handleSum = todos.filter((item) => item.completed === false).length;

  const handleClear = () =>{
    const newClear = todos.filter((item) => item.completed === false)
    setTodos(newClear);
  }

  const changeFilter = (filter) => {
    setFilter(filter)
  }

  const filteredTodos = () =>{
    switch (filter) {
      case 'all':
        return todos;
      case 'active' :
        return todos.filter((item) => item.completed === false);
      case 'completed':
        return todos.filter((item) => item.completed === true);
      default:
        return todos;
    }
  }

  const handleDragEnd = result => {
    if(!result.destination) return;
      const startIndex = result.source.index;
      const endIndex = result.destination.index;
      const copyArray = [...todos];
      const [reorderItem] = copyArray.splice(startIndex, 1);
      
      copyArray.splice(endIndex, 0, reorderItem);

      setTodos(copyArray);
  }


  return(
    <div className="flex flex-col items-center min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
      <Header/>
      <main className="container max-auto px-4 md:max-w-xl">
        <TodoCreate createTodos={createTodos}/>

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList 
            todos={filteredTodos()} 
            handleDelete={handleDelete}
            updateTodos={updateTodos}
          />
        </DragDropContext>

        <TodoComputed
          handleSum={handleSum}
          handleClear={handleClear}
        />
        <TodoFilter
          changeFilter={changeFilter}
          filter={filter}
        />
      </main>
      <footer className="text-center mt-8 text-gray-400 dark:taxt-gray-400 font-extrabold border-b-2 text-lg border-b-gray-400">
        Drag and drop to reorder List
      </footer> 
    </div>
  )
};

export default App