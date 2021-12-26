import styled, { css } from "styled-components";

export const ToDoSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blanchedalmond;
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: darkblue;
`;

export const Todo = styled.div`
  width: 500px;
  height: 50vh;
  background-color: #d9d9d9;
  margin: 100px auto;
  border-radius: 10px;
  padding-top: 20px;
`;

export const AddingBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Input = styled.input`
  height: 35px;
  width: 60%;
  outline: none;
  border-radius: 5px;
  padding: 0 10px;
`; 

export const Button = styled.button`
  width: 28%;
  height: 40px;
  background-color: darkblue;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const DataItms = styled.div`
  height: 405px;
  overflow-y: auto;
`;

export const DetalsBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Checxbox = styled.input`
  width: 40px;
  height: 15px;
`;

export const Item = styled.p`
  width: 200px;
  text-align: center;
  font-size: 20px;
  color: black;
  font-weight: 600;
  position: relative;
  z-index: 0;
`;

export const DeleatButton = styled.button`
 width: 80px;
 height: 35px;
 background-color: brown;
 color: white;
 font-weight: 600;
 border-radius: 10px;
 cursor: pointer;
 font-size: 14px;
`;

export const ChackdLine = styled.div`
  height: 2px;
  width: 200px;
  position: absolute;
  z-index: 1;
  background-color: black;
  display: none;
   ${props => props.isActive && css`
   display: block;
   top: 13px;
   `} 
`;