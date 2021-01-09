const INITIAL_STATE = {
  id: null,
  username: '',
  email: '',
  role: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_REGISTER_SUCCESS':
      return {
        ...state,
      };
    case 'USER_LOGIN_SUCCESS':
      console.log('login reducer', action.payload);
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        role: action.payload.role,
      };
    default:
      return state;
  }
};
