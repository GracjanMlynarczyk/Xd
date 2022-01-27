import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  0% { transform: rotate(0deg) };
  100% { transform: rotate(360deg) };
`;

export const SpinnerWrapper = styled.div<{ inline?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ inline }) => {
    if (inline) {
      return `
        position: static;
      `;
    }
    return `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }}
`;

export const SpinnerCircle = styled.span<{ hasMessage?: boolean }>`
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-top: 2px solid ${({ theme }) => theme.colors.blue01};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${Spin} 2s ease-in-out infinite;
  margin-bottom: ${({ hasMessage }) => (hasMessage ? '10px' : '0')};
`;
