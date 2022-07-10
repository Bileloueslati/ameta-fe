import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import authActions from '../store/auth/authAction';
import store from '../store/store';
import { toast } from 'react-toastify';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_END_POINT
};

export const isHttpError = (error: any): error is AxiosError => axios.isAxiosError(error);

export type HttpError = AxiosError;

export type ConstraintError = {
  propertyPath: string;
  message: string;
  code: string;
};

export type ConstraintsError = ConstraintError[];

export type ServerError = { errorMessage: string };

export const http: AxiosInstance = axios.create(config);

let { token: jwt } = store.getState().auth;

store.subscribe(() => {
  jwt = store.getState().auth.token;
});

http.interceptors.request.use((config) => {
  if (jwt) {
    config.headers = {
      Authorization: `Bearer ${jwt}`,
      Accept: '*',
      'Content-Type': 'application/json'
    };
  }

  return config;
});

/**
 * Expired JWT
 */

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && error.response?.data?.message === 'Expired JWT Token') {
      console.error('Expired token');
      localStorage.removeItem('auth');
      store.dispatch(authActions.logout());
      toast.error('Please login below to connect.');
    } else {
      return error;
    }
  }
);

export const isContraintError = (error: any): boolean =>
  error.hasOwnProperty('propertyPath') ? true : false;
