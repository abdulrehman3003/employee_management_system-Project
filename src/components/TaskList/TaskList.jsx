import React from 'react'
import AcceptTasks from './AcceptTasks';
import NewTasks from './NewTasks';
import CompleteTasks from './CompleteTasks';
import FailedTasks from './FailedTasks';


const TaskList = ({data}) => {
    if(data.tasks.newTask){
        console.log("sex.com")
    }
    
  return (
    <div id="tasklist" className="h-[55%] w-full py-5 overflow-x-auto b mt-10 flex items-center justify-start gap-10 flex-nowrap ">
        {data.tasks.map((elem,idx)=>{
            
            if(elem.active){
                return <AcceptTasks key={idx} data={data}/>
            }
            if(elem.newTask){
                return <NewTasks key={idx} data={data}/>
            }
            if(elem.completed){
                return <CompleteTasks key={idx} data={data}/>
            }
            if(elem.failed){
                return <FailedTasks  key={idx} data={data}/>
            }
        })}
        
        
        
        

       

        
        
    </div>
  )
}

export default TaskList
