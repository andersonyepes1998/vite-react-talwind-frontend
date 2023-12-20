import CrossIcon from "./components/icons/CrossIcon";
import Moon from "./components/icons/Moon";

const App = () =>{

  return(
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container max-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">todo</h1>
          <button>
            <Moon fill={'#444'}/>
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input 
            type="text" 
            placeholder="Create a new TODO..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container max-auto px-4 mt-8">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className="rounded-full border-2 inline-block w-5 h-5"></button>
            <p className="text-gray-600 grow">Completed online JavaScript curse in Udemy</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className="rounded-full border-2 inline-block w-5 h-5"></button>
            <p className="text-gray-600 grow">Completed online JavaScript curse in Udemy</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className="rounded-full border-2 inline-block w-5 h-5"></button>
            <p className="text-gray-600 grow">Completed online JavaScript curse in Udemy</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container max-auto px-4 ">
        <div className="bg-white rounded-md mt-8 p-4 flex justify-center gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section>
        <p className="text-center mt-8 text-gray-500">Drag and drop to reorder List</p> 
      </section>
    </div>
  )
};

export default App