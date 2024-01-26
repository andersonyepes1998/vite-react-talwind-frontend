
// eslint-disable-next-line react/prop-types
const TodoFilter =  ({changeFilter, filter}) =>{

  const styleAll = 'text-blue-700 hover:text-gray-700';
  const styleAll2 = 'text-gray-700 hover:text-blue-700';

    return(
        <section className="container max-auto">
          <div className="bg-white rounded-md mt-8 p-4 flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000">
            <button 
              className={`${filter === 'all' ? styleAll : styleAll2} dark:bg-violet-400 bg-gray-200 px-4 rounded-full border-2 dark:border-violet-700 border-gray-400`} 
              onClick={() => changeFilter('all')}
            >
              All
            </button>
            <button className={`${filter === 'active' ? 
                'text-blue-700 hover:text-gray-700' : 
                'text-gray-700 hover:text-blue-700'} dark:bg-violet-400  bg-gray-200 px-4 rounded-full border-2 dark:border-violet-700 border-gray-400`}  
              onClick={() => changeFilter('active')}
            >
              Active
            </button>
            <button className={`${filter === 'completed' ? 
                'text-blue-700 hover:text-gray-700' : 
                'text-gray-700 hover:text-blue-700'}
                dark:bg-violet-400 bg-gray-200 px-4 rounded-full border-2 dark:border-violet-700 border-gray-400`} 
              onClick={() => changeFilter('completed')}
            >
              Completed
            </button>
          </div>
        </section>
    )
}

export default TodoFilter