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
  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between">
          <div className="flex justify-between pl-4 pr-4 mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="hover:bg-red-700 bg-red-400 text-white px-4 py-2 rounded font-bold" > Delete</button>
        </li >
      )
    });
  }

  return (
    <div>
      <>
        <h1 className="bg-black text-white p-5 font-bold text-center text-5xl">
          My Todo List
        </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="text-2xl border-zinc-600 border-2 m-4 px-4 py-2"
            placeholder="Enter Task here"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="text-2xl border-zinc-600 border-2 m-4 px-4 py-2"
            placeholder="Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="bg-green-300 hover:bg-green-500 font-semibold px-3 py-2 rounded-md m-4">
            ADD
          </button>
        </form>
        <hr />
        <div className="p-4 bg-slate-200">
          <ul>{renderTask}</ul>
        </div>
      </>
    </div>
  );
};

export default page;
