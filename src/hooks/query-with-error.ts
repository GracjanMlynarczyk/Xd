import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { handleApiError } from '@utils/api';

export default <TQueryFnData, Error>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TQueryFnData, QueryKey>,
  options?: UseQueryOptions<TQueryFnData, Error>
): UseQueryResult<TQueryFnData, Error> =>
  useQuery<TQueryFnData, Error>(queryKey, queryFn, {
    ...options,
    onError: (error) => {
      handleApiError(error as unknown as AxiosError);

      if (options) {
        const { onError } = options;
        if (onError) {
          onError(error);
        }
      }
    },
  });
