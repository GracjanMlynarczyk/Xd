import React, { FC } from 'react';
import { SpinnerCircle, SpinnerWrapper } from './spinner.styled';

type Props = {
  message?: string;
  inline?: boolean;
  className?: string;
};

const Spinner: FC<Props> = ({ message, inline, className }) => (
  <SpinnerWrapper data-testid='spinner' inline={inline} className={className}>
    <SpinnerCircle hasMessage={!!message} />
    {message ? <p>{message}</p> : undefined}
  </SpinnerWrapper>
);

export default Spinner;
