import React, { useState } from "react";
import * as S from "./NavbarStyles";
import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "../button/Button";

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
        <S.NavLogo to="/">
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
            <S.NavLink to="#">Sobre</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink to="#">Contato</S.NavLink>
          </S.NavItem>
          <S.NavItemBtn>
            {buttonMobile ? (
              <S.NavBtnLink to="#sky">
                <Button onClick={handleClick} fontBig primary text="Login"/>
              </S.NavBtnLink>
            ) : (
              <S.NavBtnLink to="#Feng">
                <Button primary text="Login" />
              </S.NavBtnLink>
            )}
          </S.NavItemBtn>
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  );
};
