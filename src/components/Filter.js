import PropTypes from 'prop-types';
import useGenres from '../hooks/Genres';

const Filter = ({
  fetchGamesByGenre,
  setGenre,
  setPage,
}) => {
  const genres = useGenres();

  const handleChange = (event) => {
    setPage(1);
    fetchGamesByGenre(event.target.value);
    setGenre(event.target.value);
  };

  return (
    <div className="filter d-md-none">
      <select onChange={handleChange} defaultValue="All">
        <option value="All">All</option>
        {genres.map((g) => (<option key={g.id} value={g.name}>{g.name}</option>))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  fetchGamesByGenre: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Filter;
