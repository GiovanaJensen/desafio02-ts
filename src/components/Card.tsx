import { 
  Box,
  ChakraProvider,
} from '@chakra-ui/react'
import { Form } from './Form'

import { Header } from "./Header"

export const Card = () => {
  return (
    <>
      <ChakraProvider>
        <Box minHeight='100vh' position='relative' background="linear-gradient(123deg, rgba(82,9,121,1) 53%, rgba(131,15,176,1) 100%)" padding='25px'>
          <Header />
          <Form />
        </Box>
      </ChakraProvider>
    </>
  )
}