

import React from "react";

function TaskContainer({todo , index , delTodo}) {
  return (
    

     
      <div className="flex flex-col h-[240px] w-[187px] m-4 border-slate-950 border-2 bg-white transition ease-in-out delay-150 hover:scale-110 duration-300 hover:-translate-y-1 max-[600px]:w-32 max-[320px]:w-24">
        <div className="mb-3 pr-2">
          <textarea
            className="h-[190px] w-[184px] flex flex-wrap resize-none max-[600px]:w-[125px] max-[320px]:w-[93px] text-center border-black border"
            type="text"
            value={todo}
          ></textarea>
        </div>
        <div className="flex justify-between items-center mt-auto px-2 mb-3">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 hover:before:opacity-10"
              id="check"
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <button
            type="button"
            className="text-white font-small rounded-lg text-sm px-2 py-1 dark:bg-black"
            onClick={() => delTodo(index) }
          >
            Delete
          </button>
        </div>
      </div>






      
      

      

  

      
   
  );
}

export default TaskContainer;
