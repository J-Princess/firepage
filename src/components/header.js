import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Helmet } from "react-helmet";

const Header = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <Helmet>
        <title>2nd Semester Exam Project</title>
        <meta name="description" content="Firebase React Hosting." />
        <meta
          name="keywords"
          content="React, Pagination, Altschool, Project, Firebase hosting, ErrorBoundary"
        />
      </Helmet>
      <h1 className="logo" onClick={goHomeHandler}>
        EXAMS
      </h1>
      <nav className="listers">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="about" className="link">
          About
        </Link>
        <Link to="users" className="link">
          Users
        </Link>
        <Link to="contact" className="link">
          Contact Us
        </Link>
        <Link to="errortester" className="link">
          Testing Error
        </Link>
      </nav>
    </div>
  );
};

export default Header;
