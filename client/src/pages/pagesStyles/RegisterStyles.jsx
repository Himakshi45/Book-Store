import styled from "styled-components";
export const Wrapper = styled.section`
.container {
  padding: 9rem 0 5rem 0;
  text-align: center;
}

#checkbox {
  width: 1rem;
}

form span {
  font-size: 2rem;
}

#reset_pass_lbl {
  display: block;
  text-align: left;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .container {
    padding: 6rem 0 3rem 0;
  }

  #checkbox {
    width: 0.8rem;
  }

  form span {
    font-size: 0.7rem;
  }

  #reset_pass_lbl {
    text-align: center;
  }
}
`;