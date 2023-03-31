import Types from '../types';

const initialState = {
  routeName: 'HomeScreen',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.Bottom.UPDATE_INDEX_BOTTOM: {
      return {
        ...state,
        routeName: action.payload,
      };
    }

    default:
      return state;
  }
};
