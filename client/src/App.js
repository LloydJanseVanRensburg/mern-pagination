import { useState, useEffect } from "react";
import "./App.css";

// Components
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

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
    <div className="app">
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="error-text">{error}</h3>
      ) : (
        <>
          <Pagination page={page} changePage={setPage} pages={pages} />
          <div className="app__posts">
            {posts.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </div>
          <Pagination page={page} changePage={setPage} pages={pages} />
        </>
      )}
    </div>
  );
};

export default App;
