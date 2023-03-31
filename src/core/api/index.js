import request from './request';

export const getListUserPayment = async data => {
  return request.call({
    url: '/api/users/random_user?size=10',
    method: 'GET',
  });
};
