import React from "react";
import * as S from "./FooterStyles";
import { Button } from "../button/Button";

export const Footer = () => {
  return (
    <>
      <S.FooterContainer>
        <S.FooterSubscription>
          <S.FooterSubHeading>
            Entre em contato para Tomarmos um café virtual
          </S.FooterSubHeading>
          <S.FooterSubText>
            se for uma terça, um duplo expresso sem açucar
          </S.FooterSubText>
          <S.Form about="form" action="mailto:birthdayweb@gmail.com" method="POST" encType="text/plain">
            <S.FormWrap>
              <S.FormInput type="email" placeholder="Digite seu Email" />
              <Button primary text="enviar" type="submit"/>
            </S.FormWrap>
              <S.FormTextArea type="text" />
          </S.Form>
        </S.FooterSubscription>
        <S.SocialMedia>
          <S.SocialMediaWrap>
            <S.SocialLogo>
              <S.Icon />
              SKYFENG
            </S.SocialLogo>
            <S.WebsiteRights>SKYFENG ©️2022</S.WebsiteRights>
            <S.SocialIcons>
              <S.SocialIconLink
                href="https://github.com/devAlexSilva"
                title="Github"
                target="_blank"
                aria-label="Github"
              >
                <S.Github />
              </S.SocialIconLink>
              <S.SocialIconLink
                href="https://linkedin.com/in/devAlexSilva"
                title="Linkdln"
                target="_blank"
                aria-label="Linkdln"
              >
                <S.Linkdln />
              </S.SocialIconLink>
            </S.SocialIcons>
          </S.SocialMediaWrap>
        </S.SocialMedia>
      </S.FooterContainer>
    </>
  );
};
