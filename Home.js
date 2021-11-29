import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <span className="menu">
        <h4>See Books</h4>
        <h4>Update Books</h4>
      </span>
      <div className="box">
        <h2>Library System</h2>
        <div className="cont">
          <h4>Serial Number:</h4>
          <input type="text" />
          <h4>Book Name:</h4>
          <input type="text" />
          <h4>Book Description:</h4>
          <input type="text" />
          <button className="btn">Add Books</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
