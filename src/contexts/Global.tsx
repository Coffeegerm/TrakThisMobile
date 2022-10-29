import React from 'react';
import { AccessTokenProvider } from './AccessToken';
import { AuthProvider } from './AuthProvider';
import { AxiosProvider } from './Axios';

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => (
  <AccessTokenProvider>
    <AuthProvider>
      <AxiosProvider>{children}</AxiosProvider>
    </AuthProvider>
  </AccessTokenProvider>
);
