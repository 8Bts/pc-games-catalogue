import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import pagenav from '../styles/pagenav.module.css';

const PageNav = ({
  fetchGamesByGenre,
  genre,
  page,
  setPage,
  totalPages,
  showGenre,
}) => {
  const initialPageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [pageBtns, setPageBtns] = useState(initialPageBtns);

  useEffect(() => {
    if (page === 1) setPageBtns(initialPageBtns);
  }, [page]);

  const switchBtns = (value) => {
    if (value === pageBtns[0] + 9) {
      const nextBtns = pageBtns.map((p, idx) => (value + idx > totalPages ? -1 : value + idx));
      const tail = nextBtns.indexOf(-1);
      if (tail !== -1) {
        setPageBtns(nextBtns.slice(0, tail));
      } else {
        setPageBtns(nextBtns);
      }
    } else if (value === pageBtns[0] && value > 10) {
      const nextBtns = pageBtns.map((p) => p - 9);
      setPageBtns(nextBtns);
    }
  };

  const handlePageBtnClick = (event) => {
    const value = Number(event.target.innerHTML);
    switchBtns(value);
    setPage(value);
    fetchGamesByGenre(genre, value);
  };
  const handleNextClick = () => {
    fetchGamesByGenre(genre, page + 1);
    switchBtns(page + 1);
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      fetchGamesByGenre(genre, page - 1);
      switchBtns(page - 1);
      setPage(page - 1);
    }
  };

  return (
    <div className={`d-flex justify-content-${showGenre ? 'between' : 'end'} align-items-center`}>
      {showGenre ? (<h2 className="d-none d-md-block mx-5">{`Genre: ${genre}`}</h2>) : ''}
      <div className={pagenav.container}>
        <div>
          <span>{` Page: ${page} of ${totalPages}`}</span>
        </div>
        <div>
          {
            pageBtns.map((p) => (
              <button
                key={Math.random() * 100}
                onClick={handlePageBtnClick}
                type="button"
                className={`d-none d-md-inline-block btn mx-1 ${p === page ? 'btn-dark' : 'btn-success'}`}
              >
                {p}
              </button>
            ))
          }
          <button onClick={handlePrevClick} type="button" className="btn bg-success m-3" disabled={!(page > 1)}>Previous</button>
          <button onClick={handleNextClick} type="button" className="btn bg-success">Next</button>
        </div>
      </div>
    </div>
  );
};

PageNav.propTypes = {
  fetchGamesByGenre: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  showGenre: PropTypes.bool,
};

PageNav.defaultProps = {
  showGenre: false,
};

export default PageNav;