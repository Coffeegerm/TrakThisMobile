import React, { useEffect } from 'react';
import { trakThisAPIClient } from 'services/trak-this-api';
import { useAccessToken } from './AccessToken';

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const token = useAccessToken();
  useEffect(() => {
    trakThisAPIClient.interceptors.request.use(
      request => {
        const headers = request.headers || {};
        if (token) headers['X-IGDB-Token'] = token;
        request.headers = headers;

        if (__DEV__) {
          console.info(
            `requestInterceptor BASE: ${request.baseURL} URL:${request.url}`
          );
          console.info(request);
        }
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }, [token]);
  return <>{children}</>;
};
