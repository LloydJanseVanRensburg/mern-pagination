import "./Pagination.css";

const Pagination = ({ pages, page, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((el, idx) => (
      <button
        key={idx + 1}
        className="pagination__page"
        disabled={page === idx + 1}
        onClick={() => changePage(idx + 1)}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((el, idx) => (
          <button
            key={startValue + idx + 1}
            className="pagination__page"
            disabled={page === idx + 1}
            onClick={() => changePage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button>...</button>
        <button onClick={() => changePage(pages)}>{pages}</button>
      </>
    );
    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>

            {[...Array(5)].map((el, idx) => (
              <button
                key={startValue + idx + 1}
                className="pagination__page"
                disabled={page === startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}

            <button>...</button>
            <button onClick={() => changePage(pages)}>{pages}</button>
          </>
        );
      } else {
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>

            {[...Array(5)].map((el, idx) => (
              <button
                key={startValue + idx + 1}
                className="pagination__page"
                style={
                  startValue + idx + 1 > pages ? { display: "none" } : null
                }
                disabled={page === startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }

  return (
    pages > 1 && (
      <div className="pagination">
        <button
          onClick={() => changePage((page) => page - 1)}
          disabled={page === 1}
          className="pagination__prev"
        >
          &#171;
        </button>

        {middlePagination}

        <button
          onClick={() => changePage((page) => page + 1)}
          disabled={page === pages}
          className="pagination__next"
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
