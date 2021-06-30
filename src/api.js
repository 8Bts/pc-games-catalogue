const API = (() => {
  const URL = 'https://api.rawg.io/api/games';
  const API_KEY = '0c2599def9e140fa9a93175f976efda3';

  const getAllGames = async () => {
    const response = await fetch(`${URL}?key=${API_KEY}&page_size=15`);
    return response.json();
  };

  const getGameById = async (id) => {
    const response = await fetch(`${URL}/${id}?key=${API_KEY}`);
    return response.json();
  };

  return { getAllGames, getGameById };
})();

export default API;
