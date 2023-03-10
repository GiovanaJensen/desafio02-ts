import {
    AbsoluteCenter,
    Center,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'

import { login } from '../services/login';
import {ButtonLogin} from "./ButtonLogin";

export const Form = () => {
    return (
        <AbsoluteCenter minWidth="50%" backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' axis='both'>
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input placeholder="email@email.com" />
                <FormLabel>Senha</FormLabel>
                <Input placeholder="sua senha" />
            </FormControl>
            <Center>
              <ButtonLogin onClick={login}/>
            </Center>
          </AbsoluteCenter>
    )
}