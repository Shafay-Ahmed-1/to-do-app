"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);

    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  let deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }
  let renderTask = <h2 className="text-center">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between bg-blue-300 p-6 rounded shadow-sm mb-4 border-r-2 border-blue-600">
          <div className="flex justify-between pl-4 pr-4 w-full">
            <h5 className="text-2xl font-bold text-gray-800">{t.title}</h5>
            <h6 className="text-lg text-gray-600">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="hover:bg-red-600 bg-gray-800 text-white px-5 py-2 rounded font-medium transition-colors" > Delete</button>
        </li >
      )
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <>
        <h1 className="text-6xl font-extrabold text-gray-900 p-10 text-center tracking-tight border-b-4 border-black">
          My Todo List
        </h1>
        <form onSubmit={submitHandler} className="flex flex-wrap justify-center items-end gap-6 p-8 max-w-5xl mx-auto">
          <div className="flex-1 min-w-72">
            <input
              type="text"
              className="text-xl border-b-2 border-gray-300 bg-transparent px-4 py-3 w-full focus:outline-none focus:border-black transition-colors placeholder-gray-400"
              placeholder="Enter Task here"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
          <div className="flex-1 min-w-72">
            <input
              type="text"
              className="text-xl border-b-2 border-gray-300 bg-transparent px-4 py-3 w-full focus:outline-none focus:border-black transition-colors placeholder-gray-400"
              placeholder="Description"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </div>
          <button className="bg-black hover:bg-green-500 text-white font-medium px-8 py-3 rounded transition-colors">
            ADD
          </button>
        </form>
        <hr className="border-gray-200 max-w-5xl mx-auto" />
        <div className="p-8 max-w-5xl mx-auto">
          <ul>{renderTask}</ul>
        </div>
      </>
    </div>
  );
};

export default page;