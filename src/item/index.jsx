import { deleteItem } from "../reducer/index.js";
import { useDispatch } from "react-redux";

function JobItem(jobProps) {
  let time = new Date(jobProps.id);
  const weekDay = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];
  const dispatch = useDispatch();

  const handleRemoveJob = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div
      className="job job-content border border-secondary-subtle rounded-2 text-center focusable p-2 my-2 mx-2"
      tabIndex={0}
      draggable
      data-id={jobProps.id}
    >
      <div className="job-content__header">
        {weekDay[time.getDay() - 1]} {time.getHours()}:
        {time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}{" "}
        {time.getDate() < 10 ? "0" + time.getDate() : time.getDate()}/
        {time.getMonth()  < 10 ? "0" + time.getMonth() : time.getMonth()}/{time.getFullYear()}
      </div>
      <div className="job-content__body">
        <h5 className="job-content__title">WATTPAD NÓI RẰNG</h5>
        <p className="job-content__text text-wrap">{jobProps.content}</p>
        <button
          tabIndex={-1}
          onClick={() => handleRemoveJob(jobProps.id)}
          className="btn btn-danger btn-md text-warning"
        >
          THU HỒI
        </button>
      </div>
    </div>
  );
}

export default JobItem;
