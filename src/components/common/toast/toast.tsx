import React, { FC, ReactElement } from 'react';
import { MessageType } from '@utils/notify';
import { Wrapper, IconWrapper } from './toast.styled';

type Props = {
  type: MessageType;
  icon?: ReactElement;
};

const Toast: FC<Props> = ({ children, type = MessageType.Info, icon }) => (
  <Wrapper type={type}>
    {icon && <IconWrapper>{icon}</IconWrapper>} {children}
  </Wrapper>
);

export default Toast;
