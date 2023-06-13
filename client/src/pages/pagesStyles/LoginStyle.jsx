import styled from "styled-components";
export const Wrapper = styled.section`
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem 0 8rem 0;
  text-align: center;
  height: 100vh;
}

h2 {
  font-weight: 300;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8rem;
  margin: auto;
}

form label {
  display: block;
  font-size: 1.8rem;
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
  font-size: 1.5rem;
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