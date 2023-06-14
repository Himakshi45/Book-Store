import styled from "styled-components";
export const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  li {
    padding: 10px;
    margin: 10px;
    width: 100%;
    max-width: 250px;
    max-height: 400px;
    list-style-type: none;
    justify-content: flex-start;
  }

  .card {
    margin: auto;
    padding: 5px;
    height: 100%;
    width: 100%;
    box-shadow: 5px 5px 10px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card > img {
    width: 100%;
    height: auto;
  }

  .card article {
    padding: 5px;
  }

  .card h3 {
    padding: 4px;
  }

  .card p {
    padding: 3px;
  }

  .books {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5vmax;
    justify-content: center;
    min-height: 30vh;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }

    ul {
      justify-content: center;
      align-items: center;
    }

    li {
      width: 100%;
      max-width: 100%;
      max-height: none;
    }
  }
`;
