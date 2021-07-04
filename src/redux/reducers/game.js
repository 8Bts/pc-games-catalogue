export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_GAMES_DATA_FULFILLED': return action.payload;
    case 'FETCH_GAMES_BY_GENRE_FULFILLED':
      if (action.payload.count > 0) return action.payload;
      return state;
    default: return state;
  }
};
