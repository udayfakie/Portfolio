import React from "react";
import styled from "styled-components";

const Contact = () => {

  
  return (
    <Container>
    <H1>Contact Us</H1>
      <Form>
        <Input type="text" placeholder="Name" name="name"/>
        <Input type="email" placeholder="Email" name="email"/>
        <Texteara name="message" rows="7" placeholder="Message"></Texteara>
        <Button>Submit </Button>
      </Form>
    </Container>
  );
};

export default Contact;

const Form = styled.form`
text-align: center;

`

const Container = styled.div`
  padding-top: 60px;
  justify-content: center;
  display: grid;


`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 35px;
  color: darkblue;
  /* text-align: center; */
  
  
`;

const Input = styled.input`
display: block;
width: 450px;
padding: 0 20px;
border:  2px solid rgba(0,0,0, .1);
border-radius: 15px;
height: 50px;
line-height: 46px;
margin: 20px 0px;
outline: none;
color: #fff;
font-size: 15px;
letter-spacing: .1px;
background-color: darkblue;
border: 2px solid hsla(0, 0%, 100%, .2);
@media only screen and (max-width: 600px) {
    width: 80%;
  
  }
`
const Texteara = styled.textarea`
display: block;
width: 450px;
padding: 0 20px;
border:  2px solid rgba(0,0,0, .1);
border-radius: 15px;
height: 150px;
line-height: 46px;
margin: 20px 0px;
outline: none;
color: #fff;
font-size: 15px;
letter-spacing: .1px;
background-color: darkblue;
border: 2px solid hsla(0, 0%, 100%, .2);
@media only screen and (max-width: 600px) {
    width: 80%;
  /* margin-left: 40px; */
  }
`
const Button = styled.button`
  text-decoration: none;
  font-weight: bold;
  color: white;
  background-color: darkblue;
  padding: 10px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  :hover {
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin-right: 50px;
    
  }
`;