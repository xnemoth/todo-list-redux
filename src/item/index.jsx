function JobItem(jobProps) {
  // const listSelected = [];

  // const addJobToRemove = () => {};

  return (
    <option
      value={jobProps.key}
      className="job border border-secondary-subtle rounded-2 text-center p-2 my-2"
    >
      {jobProps.content}
    </option>
  );
}

export default JobItem;
