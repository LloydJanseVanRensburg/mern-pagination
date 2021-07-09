import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPassword/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen/ResetPasswordScreen";

import "./App.css";

// Components
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Button from "@material-ui/core/Button";

const App = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`);

        const { data, pages: totalPages } = await res.json();

        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error occured");
      }
    };

    fecthPosts();
  }, [page]);

  return (
    //   <div className="app">
    //     {loading ? (
    //       <h3 className="loading-text">Loading...</h3>
    //     ) : error ? (
    //       <h3 className="error-text">{error}</h3>
    //     ) : (
    //       <>
    //         <Pagination page={page} pages={pages} changePage={setPage} />
    //         <div className="app__posts">
    //           {posts.map((post) => (
    //             <Card key={post._id} post={post} />
    //           ))}
    //         </div>
    //         <Pagination page={page} pages={pages} changePage={setPage} />
    //       </>
    //     )}
    //     <div className="container">
    //       <button>noemal button</button>
    //       <Button>Material Bnutton</Button>
    //     </div>
    //   </div>
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
