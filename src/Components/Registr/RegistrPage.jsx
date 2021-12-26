import React, { useState } from "react";
import { nameReg, emailReg, passwordReg } from "../RegExpChacks/RegExpChack";
import { Button, ClassForm1, ClassForm2, ClassForm3, FormBlock, Inputs, RegistBlock, Title, TitleBlock } from "./RegistrStyle";

export const Registr = () => {

  const [option, setOption] = useState({
    name: {value: "", isValid: true},
    email: {value: "", isValid: true},
    password: {value: "", isValid: true}
  });

  function checkOption(key, value){
     if (key === "name") return nameReg.test(value);
     if (key === "email") return emailReg.test(value);
     if (key === "password") return passwordReg.test(value);
  }

  const handleChacksInput = (key,ev) => {
    setOption((prevOption) => ({
      ...prevOption,
      [key]: {
        value: ev.target.value,
        isValid: checkOption(key, ev.target.value)
      },
    }));
  };

  const handleChackValited = () => {
   return Object.values(option).some(i => !i.isValid || !i.value);
  }
  return (
   <RegistBlock>
       <ClassForm1>
         <TitleBlock>
           <Title>LESS LOGIN FORMS</Title>
         </TitleBlock>
         <FormBlock>
          <Inputs 
           onChange={(ev) => handleChacksInput("name", ev)}
           isValid={!option.name.isValid}
           value={option.name.value}
           placeholder="Name"/>
          <Inputs
           onChange={(ev) => handleChacksInput("email", ev)}
           value={option.email.value}
           isValid={!option.email.isValid}
           placeholder="Email"/>
          <Inputs
           onChange={(ev) => handleChacksInput("password", ev)}
           value={option.password.value}
           isValid={!option.password.isValid}
           placeholder="Password"/>
             <Button disabled={handleChackValited()} onClick={handleChackValited}>Login</Button>
           </FormBlock>
       </ClassForm1>
       <ClassForm2></ClassForm2>
       <ClassForm3></ClassForm3>
   </RegistBlock>     
  );
};

export default Registr;

// css autocomplete for styled components