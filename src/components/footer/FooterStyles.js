import styled from "styled-components";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { GiAbstract010 } from "react-icons/gi";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #1e1e1e;
  //#101522
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.div`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    gap: 15px;

    & > button {
      max-width: 60%;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  border: 1px solid #fff;
  font-size: 16px;

  &::placeholder {
    color: #1e1e1e;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Icon = styled(GiAbstract010)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const Github = styled(TiSocialGithubCircular)`
  font-size: 3rem;

  &:hover {
    color: #adf9;
  }
`;

export const Linkdln = styled(TiSocialLinkedinCircular)`
  font-size: 3rem;

  &:hover {
    color: #adf9;
  }
`;
