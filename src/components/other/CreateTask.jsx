import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2 ">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input type="text" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4" placeholder="Make a UI Design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To:</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4" type="text" placeholder="Employeee Name" />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4" type="date" />
            </div>
            <div className="">
              <h3 className="text-sm text-gray-300 mb-0.5" >Category</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4" type="text" placeholder="design dev etc." />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            
            <h3 className="text-sm text-gray-300 mb-0.5" >Description</h3>
            <textarea className="w-full h-44 text-sm  py-2  px-4 rounded outline-none bg-transparent border border-gray mb-4" name="" id="" cols=""></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded texxt-sm mt-4 w-full">Create Task</button>
          </div>
          
        </form>
      </div>
  )
}

export default CreateTask
