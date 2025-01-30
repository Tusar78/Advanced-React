import React from "react";

const AddTodo = () => {
  return (
    <div class="container text-center mb-2">
      <div class="row align-items-start">
        <div class="col text-start">
          <input type="text" placeholder="Add Task" />
        </div>
        <div class="col">
          <input type="date" />
        </div>
        <div class="col text-start">
          <button className="btn btn-success w-100">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
