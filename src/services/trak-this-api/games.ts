import { Game } from 'types/Game';
import { trakThisAPIClient } from './index';

export type GetGameResponse = {
  games: Game[];
  meta: { page: number; limit: number };
};
export type GetGamesParams = {
  page?: number;
  limit?: number;
};
export const getGames = (params?: GetGamesParams) =>
  trakThisAPIClient.get<GetGameResponse>('/games', {
    params,
  });

export const getGame = (id: number) =>
  trakThisAPIClient.get<{ game: Game; error?: string }>(`/games/${id}`);
