import React from 'react'

const TaskListNumber = ({data}) => {


  

  return (
    <div className="flex justify-between gap-5 mt-10">
      <div className=" rounded-xl w-[45%] bg-red-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" rounded-xl w-[45%] bg-blue-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" rounded-xl w-[45%] bg-yellow-400 py-6 px-9">
        <h2 className="text-2xl font-semibold text-black">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium text-black">Accepted Task</h3>
      </div>
      <div className=" rounded-xl w-[45%] bg-green-400 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
