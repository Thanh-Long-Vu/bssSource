import Types from '../types';

const initialState = {
  userInfo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.Auth.UPDATE_USER_INFO: {
      return {
        ...state,
        userInfo: {...state.userInfo, ...action.payload},
      };
    }

    default:
      return state;
  }
};
