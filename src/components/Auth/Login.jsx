import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`email is ${email}`)
        console.log(`password is ${password}`)

        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="border-none mt-5 bg-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
