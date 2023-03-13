import React, {useState} from "react";

import {
    AbsoluteCenter,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Input,
    RadioGroup,
    Radio
} from '@chakra-ui/react'

import { login } from '../services/login';
import {ButtonLogin} from "./ButtonLogin";

export const Form = () => {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    console.log(`E-mail: ${email} e Senha: ${password}`);
  }

    return (
      <AbsoluteCenter minWidth="50%" backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' axis='both'>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <form onSubmit={handleSubmit}>
          <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input 
              type="email"
              placeholder="email@email.com" 
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              />
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input 
              type="password"
              placeholder="sua senha" 
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              />
          </FormControl>
          <Center>
            <ButtonLogin onClick={login}/>
          </Center>
        </form>
      
      </AbsoluteCenter>
    )
}



