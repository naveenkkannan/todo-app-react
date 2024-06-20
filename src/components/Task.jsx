import React from "react";

function Task({ writeTodo , inputVal , addTodo }) {
  return (
    <div className="flex justify-center mt-4 flex-wrap ">
      <input
        className="flex basis-6 px-2 border-slate-950 border-4 rounded-lg bg-white"
        type="text"
        placeholder="Enter a Task"
        onChange={writeTodo}
        value={inputVal}
      ></input>
      <button className="flex basis-6 mx-2 border-slate-950 border-4 rounded-lg p-2 bg-black text-white" onClick={addTodo}>
        +
      </button>
    </div>
  );
}

export default Task;
