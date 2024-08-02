import React, { useState } from "react";
import { addItem } from "./reducer/index.js";
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
    if (job.trim() == "") {
      alert("CẬU MUỐN NÓI GÌ ?!");
      return;
    }
    dispatch(addItem(job));
    setJob("");
  };

  return (
    <React.Fragment>
      <div className="container border border-3 border-secondary-subtle rounded-3 d-flex flex-column align-items-center py-2">
        <div className="header text-center px-2 mx-2">
          <h1>TODO LIST</h1>
        </div>
        <div className="content justify-content-center row w-100 px-2 mx-2 my-2 ">
          <div className="content-list d-flex flex-row flex-wrap justify-content-center col-8 px-2 mx-2 my-2">
            <div
              className="d-flex flex-row flex-wrap justify-content-around align-items-start border-0 p-2"
              id="list-job"
            >
              {dataFromStorage.map((value) => (
                <JobItem key={value.id} id={value.id} content={value.content} />
              ))}
            </div>
          </div>
          <div className="vr p-0"></div>
          <div className="content-action col d-flex flex-column align-items-center my-2">
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
                  value={job}
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
                  className="button__add-job btn btn-primary btn-md w-50 m-2"
                  type="submit"
                >
                  LÊN TIẾNG
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
