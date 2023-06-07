import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import styled from "styled-components";
=======
import { Wrapper } from "./ErrorPageStyle";
>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101
import { Button } from "../styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
