import { useState, useEffect  } from "react";
import Pagination from "./pages";
import User from "./user";
import { Helmet } from "react-helmet";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         console.log(data.results)
        setLoading(false);
        setUsers(data.results);
      });
  }, []);

  localStorage.setItem("users", JSON.stringify(users))

  return (
    <div className="container">
    <Helmet>
        <title>2nd Semester Exam Project</title>
        <meta
          name="description"
          content="Firebase React Hosting."
        />
        <meta
          name="keywords"
          content="React, Pagination, Altschool, Project, Firebase hosting, ErrorBoundary"
        />
      </Helmet>
       {loading ? (
        <h1 className="loading">Loading....</h1>
        
      ) : (
        <Pagination
          data={users}
          pageLimit={10}
          dataLimit={1}
          UseComponent={User}
        />
      )} 
<div> Click on Check profile to test error boundary</div>
    </div>
  );
};
export default Users;