import { useQuery } from '@tanstack/react-query';
import { getGame } from 'services/trak-this-api/games';

export const useGame = (id: number) => {
  const { data, isLoading, isError } = useQuery(
    ['game', id],
    async () => (await getGame(id)).data
  );
  return {
    game: data?.game,
    isError,
    isLoading,
  };
};
