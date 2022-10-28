import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect } from 'react';
import { getIGDBAccessToken } from 'services/trak-this-api/credentials';

const Context = createContext<string | null>(null);

export const useAccessToken = () => useContext(Context);

export const AccessTokenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = React.useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const existing = await AsyncStorage.getItem('ACCESS_TOKEN');
      const expiration =
        (await AsyncStorage.getItem('ACCESS_TOKEN_EXPIRATION')) || '';
      const expiredDate = new Date(expiration);
      // If the token is expired, we need to get a new one
      if (existing || expiredDate < new Date()) {
        setToken(existing);
      } else {
        try {
          const response = await getIGDBAccessToken();
          // store the token in async storage for use on reload if not expired
          AsyncStorage.setItem('ACCESS_TOKEN', response.access_token);
          // store expiration as iso string to compare later
          const newExpiration = new Date();
          newExpiration.setSeconds(
            newExpiration.getSeconds() + response.expires_in
          );
          AsyncStorage.setItem(
            'ACCESS_TOKEN_EXPIRATION',
            newExpiration.toISOString()
          );
          setToken(response.access_token);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);

  return <Context.Provider value={token}>{children}</Context.Provider>;
};
