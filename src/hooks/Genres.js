import { useState, useEffect } from 'react';
import API from '../api';

export default () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await API.getAllGenres();
      const genres = data.results.filter((g) => g.name !== 'RPG');
      setGenres(genres);
    })();
  }, []);

  return genres;
};
