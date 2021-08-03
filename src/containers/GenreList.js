import PropTypes from 'prop-types';
import genrelist from '../styles/genrelist.module.css';
import useGenres from '../hooks/Genres';

const GenreList = ({
  fetchGamesByGenre,
  setGenre,
  setPage,
}) => {
  const genres = useGenres();

  const handleClick = (event) => {
    setPage(1);
    fetchGamesByGenre(event.target.innerHTML);
    setGenre(event.target.innerHTML);
  };

  return (
    <aside className={`${genrelist.sidebar} d-none d-md-block`}>
      <ul className="list-group">
        <li className={`list-group-item ${genrelist.li}`}>
          <button className="btn w-100 p-2" type="button" onClick={handleClick}>All</button>
        </li>
        {genres.map((genre) => (
          <li className={`list-group-item ${genrelist.li}`} key={genre.id}>
            <button className="btn w-100 p-2" type="button" onClick={handleClick}>{genre.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

GenreList.propTypes = {
  fetchGamesByGenre: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default GenreList;
