/* eslint-disable no-unused-vars*/

import {Platform} from 'react-native';
import axios from 'axios';
import store from '../../store';
import {Constant} from '../../config';
export const BASE_URL = 'https://random-data-api.com';
class Request {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: 30000,
    });

    this.axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }

  async call(config) {
    try {
      const header = config?.header;
      axios.baseURL = config.baseURL || BASE_URL;
      const headers = {
        Accept: 'application/json',
        os: 'rn-app',
        'Content-Type': 'application/json',
        ...header,
      };

      const res = await this.axios.request({headers, ...config});

      return res;
    } catch (error) {
      if (error.response) {
        throw error.response;
      } else {
        // Something happened in setting up the request that triggered an Error
        throw error;
      }
    }
  }
}

export default new Request();
