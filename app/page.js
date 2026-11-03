import React from 'react'

const page = () => {
  return (
    <div>
      <>
      <h1 className="bg-blue-800 text-cyan-300 p-5 font-bold text-center text-5xl">My Todo List</h1>
      <form>
        <input type="text"
          className="text-2xl border-zinc-600 border-2 m-4 px-4 py-2"
          placeholder="Enter Task here" />
          <input type="text" 
          className="text-2xl border-zinc-600 border-2 m-4 px-4 py-2" 
          placeholder="Description" />
          <button className="bg-green-300 hover:bg-green-500 font-semibold px-3 py-2 rounded-md">
            ADD</button>
          
      </form>
      </>
    </div>
  )
}

export default page
