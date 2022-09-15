import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { GiAbstract010 } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #1e1e1e;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: #fff;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
`;

export const NavIcon = styled(GiAbstract010)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 50%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all .5s ease;
    background-color: #101522;
  }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b594b;
    }

    @media (max-width: 768px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1rem;
    height: 100%;

    @media (max-width: 768px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b4b4b;
            transition: all .3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`