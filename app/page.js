"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])

    settitle("")
    setdesc("")
  }
  let renderTask = <h2>No Task Available</h2>

  return (
    <div>
      <>
        <h1 className="bg-blue-800 text-cyan-300 p-5 font-bold text-center text-5xl">My Todo List</h1>
        <form onSubmit={submitHandler}>
          <input type="text"
            className="text-2xl border-zinc-600 border-2 m-4 px-4 py-2"
            placeholder="Enter Task here"
            value={title}
            onChange={(e) => { settitle(e.target.value) }} />
          <input type="text"
            className="text-2xl border-zinc-600 border-2 m-4 px-4 py-2"
            placeholder="Description"
            value={desc}
            onChange={(e) => { setdesc(e.target.value) }} />
          <button className="bg-green-300 hover:bg-green-500 font-semibold px-3 py-2 rounded-md m-4">
            ADD</button>

        </form>
        <hr />
        <div className="p-4 bg-slate-200">
          <ul>{renderTask}</ul>
        </div>
      </>
    </div>
  )
}

export default page
