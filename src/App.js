import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/header";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Home from "./components/home";
import ErrorPage from "./components/errorpage";
import Footer from "./components/footer";
import About from "./components/about";
import UserDetail from "./components/userdetail";
import User from "./components/user";
const Users = lazy(() => import("./components/users"));
const AllUser = lazy(() => import("./components/alluser"));

// const ErrorFallback = ({ error, resetErrorBoundary }) => {
//   const navigate = useNavigate();
//   const goHomeHandler = () => {
//     navigate("/");
//   };
//   return (
//     <div className="user-container">
//       <h2>An Error Has Occurred somewhere in your code</h2>
//       <p>{error.message}</p>
//       <button onClick={goHomeHandler}>Go Home</button>
//     </div>
//   );
// };
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="user-container">
      <p>An Error occured somewhere on your code!</p>
      <summary>{props.error.message}</summary>
      <button onClick={props.resetErrorBoundary}>Restart app</button>
    </div>
  );
};

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <Helmet>
        <title>2nd Semester Exam Project</title>
        <meta name="description" content="Firebase React Hosting." />
        <meta
          name="keywords"
          content="React, Pagination, Altschool, Project, Firebase hosting, ErrorBoundary"
        />
      </Helmet>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <main className="user-container">
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<AllUser />}>
                <Route index element={<Users />} />
                <Route path=":id" element={<User />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
