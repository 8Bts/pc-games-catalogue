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
    if (value === 'next' && page <= totalPages) {
      const nextBtns = pageBtns.map((p) => (p + 9));
      setPageBtns(nextBtns);
    } else if (value === 'prev' && page > 9) {
      const nextBtns = pageBtns.map((p) => p - 9);
      setPageBtns(nextBtns);
    }
  };

  const handlePageBtnClick = (event) => {
    const value = Number(event.target.innerHTML);
    if (value === pageBtns[9]) {
      switchBtns('next');
    } else if (value === pageBtns[0]) {
      switchBtns('prev');
    }
    setPage(value);
    fetchGamesByGenre(genre, value);
  };
  const handleNextClick = () => {
    fetchGamesByGenre(genre, page + 1);
    if (page === pageBtns[9] || page === pageBtns[8]) {
      switchBtns('next');
    }
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      fetchGamesByGenre(genre, page - 1);
      if (page === pageBtns[0] || page === pageBtns[1]) {
        switchBtns('prev');
      }
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
        <div className={pagenav.buttons}>
          {
            pageBtns.map((p) => (
              <button
                key={Math.random() * 100}
                onClick={handlePageBtnClick}
                type="button"
                className={`page-btn d-none btn mx-1
                  ${p === page ? 'btn-dark' : 'btn-success'}
                  ${p > totalPages ? '' : 'd-md-inline-block'}`}
              >
                {p}
              </button>
            ))
          }
          <button onClick={handlePrevClick} type="button" className="prev-btn btn bg-success m-3" disabled={!(page > 1)}>Previous</button>
          <button onClick={handleNextClick} type="button" className="next-btn btn bg-success" disabled={(page === totalPages)}>Next</button>
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
