import PropTypes from 'prop-types';
import useGenres from '../hooks/Genres';

const Filter = ({ fetchGamesByGenre }) => {
  const genres = useGenres();

  const handleChange = (event) => {
    fetchGamesByGenre(event.target.value);
  };

  return (
    <div className="filter">
      <select onChange={handleChange} defaultValue="All">
        <option value="All">All</option>
        {genres.map((g) => (<option key={g.id} value={g.name}>{g.name}</option>))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  fetchGamesByGenre: PropTypes.func,
};

Filter.defaultProps = {
  fetchGamesByGenre: (value) => value,
};

export default Filter;
