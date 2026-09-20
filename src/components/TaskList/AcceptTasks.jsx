import React from "react";

const AcceptTasks = ({ data }) => {
  console.log(data);
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between">
        <h3 className="bg-red-600 px-3 rounded text-sm py-1 items-center">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-center mt-4 gap-2 text-nowrap ite ">
        <button className="bg-green-500 py-1 px-2 teext-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 teext-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTasks;
