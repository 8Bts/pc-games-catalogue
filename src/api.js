const API = (() => {
  const URL_GAMES = 'https://api.rawg.io/api/games';
  const URL_GENRES = 'https://api.rawg.io/api/genres';
  const API_KEY = '0c2599def9e140fa9a93175f976efda3';

  const getAllGames = async () => {
    const response = await fetch(`${URL_GAMES}?key=${API_KEY}&page_size=15`);
    return response.json();
  };

  const getGamesByGenre = async (genre) => {
    if (genre === 'All') return getAllGames();
    const g = genre.toLowerCase().replace(' ', '-');
    const response = await fetch(`${URL_GAMES}?key=${API_KEY}&page_size=15&genres=${g}`);
    return response.json();
  };

  const getGameById = async (id) => {
    const response = await fetch(`${URL_GAMES}/${id}?key=${API_KEY}`);
    return response.json();
  };

  const getAllGenres = async () => {
    const response = await fetch(`${URL_GENRES}?key=${API_KEY}`);
    return response.json();
    // RPG MASSIVELY MULTIPLAYER BOARD GAMES
  };

  return {
    getAllGames, getGamesByGenre, getGameById, getAllGenres,
  };
})();

export default API;
