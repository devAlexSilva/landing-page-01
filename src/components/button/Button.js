import React from "react";
import * as S from "./ButtonStyles";

export const Button = ({ text, big, fontBig, primary }) => {
  return (
    <S.Button big={big} fontBig={fontBig} primary={primary}>
      {text}
    </S.Button>
  );
};
