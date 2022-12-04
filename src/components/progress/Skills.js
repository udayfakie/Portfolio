import React from "react";
import styled from "styled-components";
import { trans } from "../../styles/GlobalStyles";
import Progress from "./Progress";
import { LABELS } from "../../constants";

const Skills = ({ forwardeRef }) => {
  return (
    <Container ref={forwardeRef}>
      <SubContainer>
        <Title>{LABELS.TECH}</Title>
        <Progress />
      </SubContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "poppinse", sans-serif;
  color: gray;
  &:hover {
    color: white;
  }
`;
const SubContainer = styled.div`
  animation: ${trans} 0.75s;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;