import React, { PropsWithChildren, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";

export interface MenuProps {}

const Aside = styled.aside`
  width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;

  nav {
    margin-top: 4rem;
  }
`;

const Logo = styled.h2`
  --color: #7df9ff;
  --text-color: #bffcff;

  text-align: center;
  font-family: "Neon", "Varela Round", sans-serif;
  font-size: 2.5rem;
  padding: 1rem;
  margin: -1rem;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;

  color: var(--text-color);
  text-shadow: 0 -2px 0px #4b9599, 0 0 10px var(--color), 0 0 20px var(--color);
  -webkit-box-reflect: below -2.6rem linear-gradient(transparent, #0004);

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
      text-shadow: 0 -2px 0px #0c191a;
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
      text-shadow: 0 -2px 0px #4b9599, 0 0 10px var(--color),
        0 0 20px var(--color);
    }
  }
`;

const Menu = ({}: MenuProps) => {
  return (
    <Aside>
      <Logo>
        Ene<span>r</span>gy
      </Logo>

      <nav>
        <label>Meny</label>

        <MenuList>
          <MenuItem icon={<CalculateRoundedIcon />} href="/">
            Kalkylator
          </MenuItem>
          <MenuItem icon={<AnalyticsRoundedIcon />} href="/stats">
            Statistik
          </MenuItem>
        </MenuList>
      </nav>
    </Aside>
  );
};

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

const Anchor = styled.a`
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
  }

  &.active {
    background: #262838;
  }

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;

interface MenuItemProps extends PropsWithChildren {
  icon: ReactNode;
  href: string;
}

const MenuItem = ({ children, icon, href }: MenuItemProps) => {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <Anchor className={router.pathname === href ? "active" : ""}>
          {icon}
          <span>{children}</span>
        </Anchor>
      </Link>
    </li>
  );
};

export default Menu;
