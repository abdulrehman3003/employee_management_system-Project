import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // useEffect(() => {
  //   if(authData){
  //     const LoggedInUser = localStorage.getItem("LoggedInUser")
  //     if(LoggedInUser){
  //       setUser(LoggedInUser.role)
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.Email && e.Password == password,
      );
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("Invalid credintials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user?.role == "employee" ? (
        <EmployeeDashboard data={LoggedInUserData} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
