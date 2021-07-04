import PropTypes from 'prop-types';
import genrelist from '../styles/genrelist.module.css';
import useGenres from '../hooks/Genres';

const GenreList = ({ fetchGamesByGenre }) => {
  const genres = useGenres();

  const handleChange = (event) => {
    fetchGamesByGenre(event.target.innerHTML);
  };

  return (
    <aside className={genrelist.sidebar}>
      <ul className="list-group">
        {genres.map((genre) => (
          <li className={`list-group-item ${genrelist.li}`} key={genre.key}>
            <button className="btn w-100 p-2" type="button" onClick={handleChange}>{genre.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

GenreList.propTypes = {
  fetchGamesByGenre: PropTypes.func,
};

GenreList.defaultProps = {
  fetchGamesByGenre: (value) => value,
};

export default GenreList;
