let darkMode = true

export const HomeObjOne = {
  lightBg: !darkMode,
  primary: darkMode,
  imgStart: false,
  lightTopLine: darkMode,
  lightText: darkMode,
  lightDesc: darkMode,
  topLine: "React",
  headingLine: `Frontend de uma forma divertida`,
  description: `React faz com que a criação de UIs interativas seja uma tarefa fácil. 
  Crie views simples para cada estado na sua aplicação, 
  e o React irá atualizar e renderizar de forma eficiente 
  apenas os componentes necessários na medida em que os dados mudam.`,
  btnLabel: "Veja Mais",
  showBtn: true,
  btnUrl: "https://pt-br.reactjs.org/",
  start: "",
  img: require("../../images/react.svg").default,
  alt: "arte com a logo do React",
  id: "home"
};

darkMode = !darkMode

export const HomeObjTwo = {
  lightBg: !darkMode,
  primary: darkMode,
  imgStart: true,
  lightTopLine: darkMode,
  lightText: darkMode,
  lightDesc: darkMode,
  topLine: "Por que React?",
  headingLine: `Dividir para conquistar`,
  description: `Crie componentes encapsulados que gerenciam seu próprio estado e então, 
  combine-os para criar UIs complexas.`,
  btnLabel: "Acessar",
  showBtn: false,
  start: "",
  img: require("../../images/webDev.svg").default,
  alt: "arte com a logo do React",
  id: "react"
};

darkMode = !darkMode

export const HomeObjThree = {
  lightBg: !darkMode,
  primary: darkMode,
  imgStart: false,
  lightTopLine: darkMode,
  lightText: darkMode,
  lightDesc: darkMode,
  topLine: "Styled-Components",
  headingLine: `Praticidade é o seu Nome`,
  description: `Capaz de criar estilos CSS utlizando a praticidade e legibilidade do JS, 
  complementando o Desenvolvimento com React, viabilizando uma Completa Masterpiece da Web`,
  btnLabel: "Veja Mais",
  showBtn: true,
  btnUrl: "https://styled-components.com/",
  start: "",
  img: require("../../images/stacks.svg").default,
  alt: "arte com a logo do React",
  id: "styled-components"
};

darkMode = !darkMode

export const HomeObjFour = {
  lightBg: !darkMode,
  primary: darkMode,
  imgStart: true,
  lightTopLine: darkMode,
  lightText: darkMode,
  lightDesc: darkMode,
  topLine: "React & Styled-Components",
  headingLine: `Desenvolver com satisfação 👨🏾‍💻`,
  description: `A combinação de organização e praticidade. Crie componentes reutilizáveis 
  podendo aplicar estilos específicos para cada um deles através de propriedades.`,
  btnLabel: "Veja Mais",
  showBtn: false,
  start: "",
  img: require("../../images/codeReview.svg").default,
  alt: "arte com a logo do React",
};
