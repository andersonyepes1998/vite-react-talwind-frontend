
// eslint-disable-next-line react/prop-types
const TodoComputed = ({handleSum, handleClear}) => {
    return(
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
          <span className="text-gray-400">{handleSum} items left</span>
          <button className="text-gray-400" onClick={handleClear}>Clear Completed</button>
        </section>
    )
}

export default TodoComputed