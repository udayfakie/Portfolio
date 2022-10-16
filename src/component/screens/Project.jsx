import React from "react";
import styled from "styled-components";
import MJICALPLANET from "../../assets/majical-planet-img.png";
import DJ_SCREEN_SHOT from "../../assets/dj_screen_shot_fit.png";
import {
  DJ_DARGHAM_LINK,
  MagicalPlanet,
  MAJICAL_PLANET_LINK,
} from "../../constant";

import { DJ_DRGHAM_SITE } from "../../constant";

const Project = () => {
  return (
    <>
      <Container>
        <Card>
          <Content>
            <Title>{DJ_DRGHAM_SITE}</Title>
            <Desc>
              <Img src={DJ_SCREEN_SHOT} alt="Iimg" />
            </Desc>
            <VIEW_PROJECT>
              <Link target="_blank" href={DJ_DARGHAM_LINK}>
                Take A Look
              </Link>
            </VIEW_PROJECT>
          </Content>
        </Card>
        <Card>
          <Content>
            <Title>{MagicalPlanet}</Title>
            <Desc>
              <Img src={MJICALPLANET} alt="PLANET" />
            </Desc>
            <VIEW_PROJECT>
              <Link target="_blank" href={MAJICAL_PLANET_LINK}>
                Take A Look
              </Link>
            </VIEW_PROJECT>
          </Content>
        </Card>
      </Container>
    </>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 90%;
  display: flex;

  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 40%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 140px;
  border-radius: 10px;
`;
const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;

  color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: gray;
  }
`;
const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  transition: all 0.8s ease-in-out;
  &:hover {
    padding: 8px;
    background: left, bottom;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
`;

const Title = styled.h3`
  color: gray;
  font-weight: 800;
  margin: 15px;
`;

const Desc = styled.div`
  color: gray;
  font-size: 15px;
`;
const VIEW_PROJECT = styled.div`
  font-weight: bold;
  padding: 30px;
  cursor: pointer;
`;
