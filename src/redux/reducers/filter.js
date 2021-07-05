export default (state = 'All', action) => {
  switch (action.type) {
    case 'SET_GENRE': return action.genre;
    default: return state;
  }
};
