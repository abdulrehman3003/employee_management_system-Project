import React from 'react'

const AcceptTasks = () => {
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl">
            <div className="flex justify-between">
                <h3 className="bg-red-600 px-3 rounded text-sm py-1 items-center">High</h3>
                <h4 className="text-sm">19 September 2026</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Say I love you to her</h2>
            <p className="text-sm mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ab, repudiandae possimus officiis iste quam.</p>
            <div className="flex justify-center mt-4 gap-2 text-nowrap ite ">
                <button className="bg-green-500 py-1 px-2 teext-sm">Mark as Completed</button>
                <button className="bg-red-500 py-1 px-2 teext-sm">Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTasks
