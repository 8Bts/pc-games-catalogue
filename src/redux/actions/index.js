import API from '../../api';

export const fetchGamesData = () => ({
  type: 'FETCH_GAMES_DATA',
  payload: API.getAllGames(),
});

export const fetchGamesByGenre = (genre) => ({
  type: 'FETCH_GAMES_BY_GENRE',
  payload: API.getGamesByGenre(genre),
});
