import React from "react";
import './style.css'

const sidebar = () => {
  return (
    <div className="bg-white sidebar p-2">
      <div className="me-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Yousaf</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2 ">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span className="fs-5">Dashboard</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-house fs-5 me-3"></i>
          <span className="fs-5">Home</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <span className="fs-5">Product</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span className="fs-5">Report</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span className="fs-5">Customers</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span className="fs-5">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default sidebar;
