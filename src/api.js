const API = (() => {
  const URL_GAMES = 'https://api.rawg.io/api/games';
  const URL_GENRES = 'https://api.rawg.io/api/genres';
  const API_KEY = '0c2599def9e140fa9a93175f976efda3';

  const getSingleGameData = async (id) => {
    const response = await fetch(`${URL_GAMES}/${id}?key=${API_KEY}`);
    return response.json();
  };

  const getAllGames = async (page = 1) => {
    const response = await fetch(`${URL_GAMES}?key=${API_KEY}&page=${page}&page_size=15`);
    return response.json();
  };

  const getGamesByGenre = async (genre, page = 1) => {
    if (genre === 'All') return getAllGames(page);
    const g = genre.toLowerCase().replace(' ', '-');
    const response = await fetch(`${URL_GAMES}?key=${API_KEY}&page_size=15&genres=${g}&page=${page}`);
    return response.json();
  };

  const getGameById = async (id) => {
    const response = await fetch(`${URL_GAMES}/${id}?key=${API_KEY}`);
    return response.json();
  };

  const getAllGenres = async () => {
    const response = await fetch(`${URL_GENRES}?key=${API_KEY}`);
    return response.json();
  };

  return {
    getSingleGameData,
    getAllGames,
    getGamesByGenre,
    getGameById,
    getAllGenres,
  };
})();

export default API;
