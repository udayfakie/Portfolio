import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";
import { trans } from "../../styles/GlobalStyles";

const ProjectCard = ({ title, description, image, link, alt }) => {
  return (
    <Card >
      <Title>{title}</Title>
      <DescriptionContainer>
        {description?.split("\n")?.map((description ,i) => (
          <Description key={i}>{description}</Description>
        ))}
      </DescriptionContainer>
        <Link target="_blank" href={link}>
      <ViewProject>
      <Img src={image} alt={alt} />
         
      </ViewProject>
        </Link>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  animation: ${trans} 0.75s;
  width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  margin: 10px 10px;
  transition: all 0.8s ease-in-out;
  &:hover {
    padding: 8px;
    background: left, bottom;
  }
`;
const ViewProject = styled.div`
  /* font-weight: bold;
  padding: 30px;
  cursor: pointer; */
`;
const Title = styled.h3`
  color: gray;
  font-weight: 800;
  margin: 15px;
  margin: 0px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fff;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;
const Description = styled.span`
  width: 250px;
  margin: 2px;
  letter-spacing: 0.1em;
  font-size: 13px;
  font-family: "poppins", sans-serif;
  font-weight: bold;
`;

const Img = styled.img`
  width: 300px;
  height: 140px;
  border-radius: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  &:hover {

    box-shadow: 1px 2px teal, -0.1em 0 .8em blue;  }
`;
