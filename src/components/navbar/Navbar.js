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

 // window.addEventListener("resize", isMobile);

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
            <S.NavLink href="#react">React</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#styled-components">styled-components</S.NavLink>
          </S.NavItem>
          <S.NavItemBtn>
            {buttonMobile ? (
              <S.NavBtnLink href="#contato">
                <Button onClick={handleClick} fontBig primary text="contato"/>
              </S.NavBtnLink>
            ) : (
              <S.NavBtnLink href="#contato">
                <Button primary text="Entre em Contato" />
              </S.NavBtnLink>
            )}
          </S.NavItemBtn>
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  );
};
