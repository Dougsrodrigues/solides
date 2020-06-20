const INITIAL_STATE = {
  userInfo: {},
};

function signIn(state = INITIAL_STATE, action) {
  const { data } = action;
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, userInfo: { ...state.userInfo, data } };
    default:
      return state;
  }
}

export { signIn };
