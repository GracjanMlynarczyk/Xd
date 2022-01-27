import React, { FC } from 'react';
import { Spinner } from '../common';
import { ErrorOverlay } from './error-overlay';
import { NoDataComponent } from './no-data';

type Props = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  isSmallTile?: boolean;
  noData?: boolean;
};

const ContentWrapper: FC<Props> = ({ children, isError, isLoading, refetch, isSmallTile, noData }) => (
  <>
    {isLoading && <Spinner />}
    {isError && <ErrorOverlay onClick={refetch} isSmallTile={isSmallTile} />}
    {!isLoading && !isError && noData ? <NoDataComponent /> : children}
  </>
);

export default ContentWrapper;
