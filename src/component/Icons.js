import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../constant";

const Icons = () => {
  return (
    <Container>
      <Link target="_blank" href={LINKEDIN}>
        <BsLinkedin />
      </Link>
      <Link target="_blank" href={GITHUB}>
        <AiFillGithub />
      </Link>
      <MailNavLink  to="/contact">
        <SiGmail />
      </MailNavLink>
    </Container>
  );
};

export default Icons;

const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;
`;
const MailNavLink = styled(NavLink)`
  font-size: 60px;
  color: white;

`;

const Link = styled.a`
  padding: 10px;
  font-size: 50px;
  color: white;
  @media only screen and (min-width: 600px) {
  }
`;