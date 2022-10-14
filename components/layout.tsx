import styled from "@emotion/styled";
import { PropsWithChildren, useState } from "react";
import Menu from "../components/menu";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 1000px) {
    width: calc(100vw + 200px);
    transition: transform 200ms ease-in-out;

    &.closed {
      transform: translate(-200px);
    }
  }
`;

const StyledMain = styled.main`
  position: relative;
  flex-grow: 1;
  background: #262838;
  margin: 1rem;
  border-radius: 1rem;
`;

const MenuButton = styled(Button)`
  position: absolute;
  border: none;
  min-width: 0;
  background: #fff;
  color: #121212;
  border-radius: 0.5rem;
  top: -0.5rem;
  left: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;

  @media only screen and (min-width: 1001px) {
    display: none;
  }
`;

const StyledContent = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 2rem;
  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export default function Layout({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledLayout className={menuOpen ? "" : "closed"}>
      <Menu />
      <StyledMain>
        <>
          <MenuButton
            onClick={() => setMenuOpen((prev) => !prev)}
            variant="contained"
          >
            {menuOpen ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
          </MenuButton>
          <StyledContent>{children}</StyledContent>
        </>
      </StyledMain>
    </StyledLayout>
  );
}
