import styled from "@emotion/styled";

const Page = styled.div`
  max-width: 800px;
  width: 100%;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  h1 > span {
    color: var(--primary-color);
  }

  > p {
    max-width: 600px;
  }
`;

export default Page;
