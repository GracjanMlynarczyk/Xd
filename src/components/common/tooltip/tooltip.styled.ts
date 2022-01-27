import styled from 'styled-components';
import { theme } from '@styles';

export const TooltipContainer = styled.div`
  display: none;
`;

export const StyledTooltip = styled.div<{ placement: string; indicator: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;

  &:hover ${TooltipContainer} {
    display: contents;
  }

  :hover {
    :before {
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: 50%;
      transform: ${({ placement }) =>
        (placement === 'top' && 'translate(-50%, -100%) rotate(45deg)') ||
        (placement === 'bottom' && 'translate(-50%, 220%) rotate(45deg)')};
      width: 14px;
      height: 14px;
      background: ${({ theme }) => theme.colors.white};
      z-index: ${theme.level.top};
      ${({ indicator }) => !indicator && `display: none;`}
    }
  }
`;

export const TooltipSpan = styled.span<{
  isIntersecting: boolean;
  text?: string;
  placement: string;
  indicator: boolean;
  isDisabled?: boolean;
  width: number;
}>`
  display: inline-block;
  position: absolute;
  display: inline-block;
  top: ${({ placement }) => (placement === 'top' ? '-10px' : null)};
  bottom: ${({ placement }) => (placement === 'bottom' ? '-10px' : null)};
  left: ${({ width, isIntersecting }) => `-${width / 2 - (isIntersecting ? -40 : 20)}px`};
  transform: ${({ placement }) =>
    (placement === 'top' && 'translateY(-100%)') || (placement === 'bottom' && 'translateY(100%)')};
  z-index: ${theme.level.high};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.dp_3};
  border-radius: 2px;
  padding: 8px 10px;
  ${({ isDisabled }) => isDisabled && `display: none;`}
`;
