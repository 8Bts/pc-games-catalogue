export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_GAME_DATA_PENDING': return {};
    case 'FETCH_SINGLE_GAME_DATA_FULFILLED': return action.payload;
    default: return state;
  }
};
