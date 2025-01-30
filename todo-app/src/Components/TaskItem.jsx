import React from "react";

const TaskItem = () => {
  return (
    <div class="container text-center mb-2">
      <div class="row align-items-start">
        <div class="col text-start">
          <p>Task 01</p>
        </div>
        <div class="col">
          <p>10/02/2022</p>
        </div>
        <div class="col text-start">
          <button className="btn btn-danger w-100">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
