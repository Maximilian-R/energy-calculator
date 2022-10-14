import type { NextPage } from "next";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Custom404: NextPage = () => {
  return (
    <Container>
      <p>Ops, här var det tomt!</p>
      <Error>
        4<span>0</span>4
      </Error>
    </Container>
  );
};

const Error = styled.h1`
  --color: #7df9ff;
  --text-color: #bffcff;

  text-align: center;
  font-family: "Neon", "Varela Round", sans-serif;
  font-size: 8rem;
  line-height: 1;
  margin: 0;
  margin-bottom: 3rem;
  padding: 0 2rem;
  font-weight: 400;
  text-transform: uppercase;

  color: var(--text-color);
  text-shadow: 0 2px 0px #4b9599, 0 0 10px var(--color), 0 0 20px var(--color);
  -webkit-box-reflect: below -44px linear-gradient(transparent, #0004);

  span {
    animation: animate 3s linear infinite;
  }

  @keyframes animate {
    0%,
    18%,
    20%,
    50.1%,
    60%,
    65.1%,
    80%,
    90.1%,
    92% {
      color: #193233;
      text-shadow: 0 2px 0px #0c191a;
    }
    18.1%,
    20.1%,
    30%,
    50%,
    60.1%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      color: var(--text-color);
      text-shadow: 0 2px 0px #4b9599, 0 0 10px var(--color),
        0 0 20px var(--color);
    }
  }
`;

export default Custom404;
