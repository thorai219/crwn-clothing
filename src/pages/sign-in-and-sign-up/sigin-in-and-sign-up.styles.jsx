import styled from "styled-components";

export const SignInAndSignUp = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
    align-items: center;

    > *::first-child {
      margin-bottom: 50px;
    }
  }
`;
