import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";



const AllTasks = () => {
  const [userData, setUserData]   = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5  rounded ">
      <div className="bg-red-400  mb-2 py-2 px-4 flex items-center justify-between rounded ">
        <h2 className="w-1/5 font-medium ">Employee Name</h2>
        <h3 className="w-1/5 font-medium 600">New Tasks</h3>
        <h5 className="w-1/5 font-medium ">Active Tasks</h5>
        <h5 className="w-1/5 font-medium ">Completed</h5>
        <h5 className="w-1/5 font-medium ">Failed</h5>
      </div>
      <div className="h-[80%]">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-emerald-600 border-2 items-center mb-2 py-2 px-4 flex justify-between rounded "
            >
              <h2 className="w-1/5 font-medium">{elem.Name}</h2>
              <h3 className="w-1/5 font-medium text-blue-600">
                {elem.taskStats.total}
              </h3>
              <h5 className="w-1/5 font-medium text-yellow-400">
                {elem.taskStats.active}
              </h5>
              <h5 className="w-1/5 font-medium text-green-600">
                {elem.taskStats.completed}
              </h5>
              <h5 className="w-1/5 font-medium text-red-500">
                {elem.taskStats.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
