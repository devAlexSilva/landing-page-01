import React, { useEffect, useState } from "react";
import * as S from "./NavbarStyles";
import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "../../GlobalStyles";

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [buttonMobile, setButtonMobile] = useState(false);

  const handleClick = () => setIsClick(!isClick);

  const isMobile = () => {
    window.innerWidth <= 768 ? setButtonMobile(true) : setButtonMobile(false);
  };

  window.addEventListener("resize", isMobile);

  return (
    <S.Nav>
      <S.NavContainer>
        <S.NavLogo to="#">
          <S.NavIcon />
          SKYFENG
        </S.NavLogo>
        <S.MobileIcon onClick={handleClick}>
          {isClick ? <FaTimes /> : <FaBars />}
        </S.MobileIcon>
        <S.NavMenu onClick={handleClick} click={isClick}>
          <S.NavItem>
            <S.NavLink to="#">Home</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink to="#">About</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink to="#">Contact</S.NavLink>
          </S.NavItem>
          <S.NavItemBtn>
            {buttonMobile ? (
              <S.NavBtnLink to="#register">
                <Button onClick={handleClick} fontBig primary>Login</Button>
              </S.NavBtnLink>
            ) : (
              <S.NavBtnLink to="#register">
                <Button primary>
                  Login not m
                </Button>
              </S.NavBtnLink>
            )}
          </S.NavItemBtn>
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  );
};
