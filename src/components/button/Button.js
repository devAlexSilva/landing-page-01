import React from "react";
import * as S from "./ButtonStyles";

export const Button = ({ text, big, fontBig, primary, type }) => {
  return (
    <S.Button big={big} fontBig={fontBig} primary={primary} type={type}>
      {text}
    </S.Button>
  );
};
