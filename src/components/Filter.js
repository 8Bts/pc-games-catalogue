import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import API from '../api';

const Filter = ({ fetchGamesByGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await API.getAllGenres();
      const genres = data.results.filter((g) => g.name !== 'RPG');
      setGenres(genres);
    })();
  }, []);

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
