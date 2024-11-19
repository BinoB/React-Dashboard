import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";

const App = () => {
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar />
        </div>
        <div className="col p-0">
          <Home/>
        </div>
      </div>
    </div>
  );
};

export default App;
