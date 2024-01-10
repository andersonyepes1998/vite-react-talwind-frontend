
// eslint-disable-next-line react/prop-types
const TodoFilter =  ({changeFilter, filter}) =>{

  const styleAll = 'text-blue-600 hover:text-gray-500';
  const styleAll2 = 'text-gray-400 hover:text-blue-600';

    return(
        <section className="container max-auto">
          <div className="bg-white rounded-md mt-8 p-4 flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000">
            <button 
              className={`${filter === 'all' ? styleAll : styleAll2}`} 
              onClick={() => changeFilter('all')}
            >
              All
            </button>
            <button className={`${filter === 'active' ? 
                'text-blue-600 hover:text-gray-500' : 
                'text-gray-400 hover:text-blue-600'}`}  
              onClick={() => changeFilter('active')}
            >
              Active
            </button>
            <button className={`${filter === 'completed' ? 
                'text-blue-600 hover:text-gray-500' : 
                'text-gray-400 hover:text-blue-600'}`} 
              onClick={() => changeFilter('completed')}
            >
              Completed
            </button>
          </div>
        </section>
    )
}

export default TodoFilter