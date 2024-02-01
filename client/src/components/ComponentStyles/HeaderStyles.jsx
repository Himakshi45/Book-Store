import styled from "styled-components";
export const MainHeader = styled.header`
<<<<<<< HEAD

  padding: 0 4.8rem;
  height: 14rem;
>>>>>>> my-changes
=======
  padding: 0 4.8rem;
  height: 14rem;
>>>>>>> upstream/raw
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
