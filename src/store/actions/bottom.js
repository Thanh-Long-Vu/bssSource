import Types from '../types';

export const updateIndexBottom = payload => {
  return {
    type: Types.Bottom.UPDATE_INDEX_BOTTOM,
    payload,
  };
};
