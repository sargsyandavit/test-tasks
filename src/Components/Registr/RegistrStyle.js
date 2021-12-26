import styled, { css } from "styled-components";

export const RegistBlock = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dadada;
  margin: 0 auto; 
  background-image: url('https://www.nawpic.com/media/2020/desktop-backgrounds-nawpic-8.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const ClassForm1 = styled.div`
  width: 320px;
  height: 600px;
  background: rgb(78 130 149 / 90%);
  z-index: 2;
  position: absolute;
  left: 425px;
  top: 100px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

export const ClassForm2 = styled.div`
  width: 320px;
  height: 500px;
  background: rgb(78 130 149 / 90%);
  z-index: 1;
  position: absolute;
  left: 600px;
  top: 150px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  &:hover{
    opacity: 0.5;
  }
`;

export const ClassForm3 = styled.div`
  width: 320px;
  height: 400px;
  background: rgb(78 130 149 / 90%);
  z-index: 0;
  position: absolute;
  position: absolute;
  left: 800px;
  top: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  &:hover{
    opacity: 0.5;
  }
`;

export const TitleBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: white;
  font-weight: 600;
  font-family: serif;
`;

export const FormBlock = styled.form`
  /* background-color: black; */
  width: 100%;
  text-align: center;
`;

export const Inputs = styled.input`
  width: 280px;
  height: 40px;
  margin-top: 40px;
  border: none;
  background: rgb(0 0 0 / 5%);
  border-radius: 10px;
  padding: 0 8px;
  font-size: 18px;
  outline: none;
  ${props => props.isValid && css`
    border: 2px solid red;
  `}
  ::placeholder {
  color: white;
  font-size: 1em;
}
`;

export const Button = styled.button`
  width: 220px;
  height: 45px;
  background: rgb(0 0 0 / 25%);
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  margin-top: 20px;
  transition: 0.5s;
  &:hover{
    background: rgb(0 0 0 / 45%);
  }
`;