const INITIAL_STATE = {
  movies: [],
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
      };
    case 'LOAD_GENRES_SUCCESS':
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
