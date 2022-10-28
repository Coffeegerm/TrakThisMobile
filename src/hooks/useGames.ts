import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getGames } from 'services/trak-this-api/games';
import { Game } from 'types/Game';

export const useGames = () => {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
    isRefetching,
  } = useInfiniteQuery(
    ['games'],
    async lastPage => {
      return (
        await getGames({
          page: lastPage?.pageParam?.page,
          limit: lastPage?.pageParam?.limit,
        })
      ).data;
    },
    {
      onError: error => console.error(error),
      getNextPageParam: lastPage => {
        return { page: lastPage.meta.page + 1, limit: lastPage.meta.limit };
      },
    }
  );

  console.tron.log({ data });

  const games = useMemo(
    () =>
      data?.pages.reduce(
        (acc: Array<Game>, page) => [...acc, ...page.games],
        []
      ),
    [data]
  );

  return {
    games,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
    isRefetching,
  };
};
