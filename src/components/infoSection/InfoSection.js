import React from "react";
import * as S from "./InfoSectionStyles";
import { Container } from "../../GlobalStyles";
import { Button } from "../button/Button";

export const InfoSection = ({
  lightBg,
  primary,
  imgStart,
  lightTopLine,
  lightText,
  lightDesc,
  topLine,
  headingLine,
  description,
  btnLabel,
  start,
  img,
  alt,
  showBtn,
  btnUrl,
  id
}) => {
  return (
    <>
      <S.InfoSec lightBg={lightBg} id={id}>
        <Container>
          <S.InfoRow about="row" imgStart={imgStart}>
            <S.InfoColumn about="c-l">
              <S.TextWrapper>
                <S.TopLine lightTopLine={lightTopLine}>{topLine}</S.TopLine>
                <S.Heading lightText={lightText}>{headingLine}</S.Heading>
                <S.Subtitle lightDesc={lightDesc}>{description}</S.Subtitle>
                {showBtn ? (
                  <a href={btnUrl} target="_blank" rel="noreferrer">
                    <Button primary={primary} text={btnLabel} />
                  </a>
                ) : null}
              </S.TextWrapper>
            </S.InfoColumn>
            <S.InfoColumn about="c-r">
              <S.ImgWrapper start={start}>
                <S.Img src={img} alt={alt} />
              </S.ImgWrapper>
            </S.InfoColumn>
          </S.InfoRow>
        </Container>
      </S.InfoSec>
    </>
  );
};
