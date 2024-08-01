import React, { useState } from "react";
import { addItem, deleteItem } from "./reducer/index.js";
import { useSelector, useDispatch } from "react-redux";
import JobItem from "./item/index.jsx";
import "./assets/style/style.css";
import getData from "./localStorage/storage.js";

function App() {
  const [job, setJob] = useState("");
  const todoList = useSelector((state) => state.todoList.list);
  const dispatch = useDispatch();
  const dataFromStorage = getData();

  const handleAddJob = (e) => {
    e.preventDefault();
    dispatch(addItem(job));
  };

  // const handleRemoveJob = (id) => {
  //   dispatch(deleteItem(id));
  // };

  return (
    <React.Fragment>
      <div className="container border border-3 border-secondary-subtle rounded-3 d-flex flex-column align-items-center py-2 my-5">
        <div className="header px-2 mx-2">
          <h1>TODO LIST</h1>
        </div>
        <div className="content row w-100 px-2 mx-2 my-2 ">
          <div className="content-list col-8 px-2 mx-2 my-2">
            <select
              className="border-0 p-2"
              name="content-list"
              id="list-job"
              multiple
              size={(dataFromStorage.length || todoList.length) + 1}
            >
              {dataFromStorage.length
                ? (dataFromStorage.forEach((value) => (
                    <JobItem key={value} content={localStorage.value} />
                  )))
                : todoList.map((item) => (
                    <JobItem key={item.id} content={item.content} />
                  ))}
            </select>
          </div>
          <div className="vr p-0"></div>
          <div className="content-action col">
            <form
              className="content__add-job d-flex flex-column"
              onSubmit={handleAddJob}
            >
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  NOTE
                </span>
                <input
                  type="text"
                  onInput={(e) => {
                    setJob(e.target.value);
                  }}
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="button-group d-flex flex-row justify-content-around m-2">
                <button
                  className="btn btn-primary btn-md w-50 m-2"
                  type="submit"
                >
                  Add Note
                </button>
                <button className="btn btn-danger btn-md text-warning w-50 m-2">
                  Delete Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
