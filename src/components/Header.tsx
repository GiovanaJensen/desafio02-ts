import {
  Flex,
  Link,
  ListItem,
  Spacer,
  UnorderedList
} from '@chakra-ui/react';

export const Header  = () => {
  return(
    <Flex color="#fff">
      <h1>DioBank</h1>
      <Spacer />
      <UnorderedList>
        <Flex gap="10px">
          <ListItem listStyleType="none"><Link>Login</Link></ListItem>
          <ListItem listStyleType="none"><Link>Footer</Link></ListItem>
        </Flex>
        
      </UnorderedList>
    </Flex>
  )
}
