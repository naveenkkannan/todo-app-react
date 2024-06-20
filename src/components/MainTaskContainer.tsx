
import React from "react"
import TaskContainer from "./TaskContainer"

export default function MainTaskContainer({todos , delTodo }) {
    return(
        

        
        <div className="flex flex-wrap justify-center p-4 min-h-screen">
         {todos.map((todo, index) => {
        return <TaskContainer todo={todo} index={index} delTodo={delTodo} />;
      })}
        </div>
        
    )

}