import styled from "styled-components";
export const MainHeader = styled.header`
  padding: 0 4.2rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar {
      padding: 0 2rem;
      height: 8rem;
    }
  
    .logo {
      height: 4rem;
    }
  }
`;
