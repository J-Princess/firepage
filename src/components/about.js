import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <div className="user-container">
        <Helmet>
          <title>2nd Semester Exam Project</title>
          <meta name="description" content="Firebase React Hosting." />
          <meta
            name="keywords"
            content="React, Pagination, Altschool, Project, Firebase hosting, ErrorBoundary"
          />
        </Helmet>
        <h1 className="h1">About Exams</h1>
        <p className="para">
          {" "}
          This project was built using React.js and Jsx. It is hosted on
          Firebase with third user Authentication. Making use of RESTFUL APIs, i
          fetched data from randomuser.api and displayed it on the user page. I
          also implemented SEO Optimization using react helmet, Pagination and
          routing from the react-router-dom. It contain ErrorBoundary that
          checks for error and Fallback incase of poor network.
        </p>
      </div>
    </>
  );
};

export default About;
