import styled from "styled-components";
export const Wrapper = styled.section`
.container {
  padding: 9rem 0 5rem 0;
  text-align: center;
}

h2 {
  font-weight: 300;
}

form {
  display: inline-block;
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8rem;
  margin: 2rem 0 1rem 0;
}

form label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.middle-label {
  display: inline-block;
  cursor: pointer;
}

input {
  width: 20rem;
  padding: 0.3rem;
  border-radius: 10px;
  outline: none;
  border: none;
}

#sub_btn {
  display: block;
  width: 100%;
  padding: 0.3rem;
  border: none;
  background: #222;
  color: #fff;
  border-radius: 3px;
}

#sub_btn:hover {
  background: #333;
  transition: all 0.5s;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .container {
    padding: 6rem 0 3rem 0;
  }

  form {
    padding: 4rem;
  }

  input {
    width: 100%;
  }
}
`;