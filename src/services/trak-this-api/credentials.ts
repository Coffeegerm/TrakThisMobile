import { trakThisAPIClient } from './index';

export const getIGDBAccessToken = async () => {
  try {
    const response = await trakThisAPIClient.get<{
      access_token: string;
      expires_in: number;
      token_type: 'bearer';
    }>('/credentials/igdb_token');
    return response.data;
  } catch (error) {
    throw error;
  }
};
