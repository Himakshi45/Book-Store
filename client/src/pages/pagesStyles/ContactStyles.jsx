import styled from "styled-components";
export const Wrapper = styled.section`
.container {
  padding: 9rem 0 5rem 0;
  text-align: center;
  margin-top: 6rem;
}

.contact-form {
  max-width: 50rem;
  margin: auto;
}

.contact-inputs {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.contact-inputs input[type="submit"] {
  cursor: pointer;
  transition: all 0.2s;
}

.contact-inputs input[type="submit"]:hover {
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.btn};
  transform: scale(0.9);
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .container {
    padding: 6rem 0 3rem 0;
    margin-top: 3rem;
  }

  .contact-form {
    max-width: 100%;
    padding: 0 2rem;
  }
}
`;