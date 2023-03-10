import {Button} from '@chakra-ui/react';


interface IButtonLogin{
    onClick: () => void
}

export const ButtonLogin = ({onClick}:IButtonLogin) => {
    return (
            <Button onClick={onClick} colorScheme='pink' size='sm' width='100%' marginTop='5px'>
              enviar
            </Button>
    )
}