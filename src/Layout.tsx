import {
  Flex,
  Spacer,
  Image,
  Heading,
  Container,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container maxW='8xl'>
      <Flex alignItems='center' marginTop={4}>
        <Image src={logo} marginRight={12}></Image>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Heading as='h4' size='md' color='black'>
            Home
          </Heading>
        </Link>
        <Spacer />
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <Text size='lg' fontWeight={600} marginRight={6} color='black'>
            Login
          </Text>
        </Link>
        <Button
          backgroundColor='blackAlpha.900'
          color='white'
          colorScheme='blackAlpha'
          variant='solid'
          paddingY={6}
          marginY={2}
        >
          Create an account
        </Button>
      </Flex>
      {children}
    </Container>
  );
};

export default Layout;
