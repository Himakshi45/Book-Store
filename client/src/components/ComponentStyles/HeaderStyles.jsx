import styled from "styled-components";
export const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 14rem;
>>>>>>> 2599441306f66f09a09409ed7283e395e14de20f
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
