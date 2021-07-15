import API from '../../api';

export const fetchSingleGameData = (id) => ({
  type: 'FETCH_SINGLE_GAME_DATA',
  payload: API.getSingleGameData(id),
});

export const fetchGamesData = () => ({
  type: 'FETCH_GAMES_DATA',
  payload: API.getAllGames(),
});

export const fetchGamesByGenre = (genre, page) => ({
  type: 'FETCH_GAMES_BY_GENRE',
  payload: API.getGamesByGenre(genre, page),
});

export const setGenre = (genre) => ({
  type: 'SET_GENRE',
  genre,
});

export const setPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  page,
});
