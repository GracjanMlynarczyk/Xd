import { ReactComponent as RefreshIcon } from '@assets/icons/refresh.svg';
import styled from 'styled-components';
import { media } from '@styles';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 16px;
`;

export const AutomaticRefreshInfo = styled.p`
  color: ${({ theme }) => theme.colors.grey02};
`;

export const Refresh = styled(AutomaticRefreshInfo)`
  margin-top: 20px;
  transition: color 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue01};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
`;

export const StyledRefreshIcon = styled(RefreshIcon)`
  margin-left: 15px;
`;

export const Status = styled.p`
  font-size: 2.125rem;
  text-overflow: ellipsis;
  width: 150px;
  height: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.tablet} {
    width: 120px;
  }
`;

export const IconWrapper = styled.div`
  :hover {
    cursor: pointer;
    svg {
      path {
        transition: fill 0.2s ease-in-out;
        fill: ${({ theme }) => theme.colors.blue01};
      }
    }
  }
`;

export const BoldedText = styled.p`
  font-weight: bold;
`;
