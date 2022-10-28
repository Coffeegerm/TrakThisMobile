import React from 'react';
import { AccessTokenProvider } from './AccessToken';
import { AxiosProvider } from './Axios';

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => (
  <AccessTokenProvider>
    <AxiosProvider>{children}</AxiosProvider>
  </AccessTokenProvider>
);
