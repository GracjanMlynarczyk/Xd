import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.grey02};
  font-size: 1rem;

  > h2 {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export { Container };
