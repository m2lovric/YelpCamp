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
    <Container maxW='7xl'>
      <Flex alignItems='center' marginTop={4}>
        <Image src={logo} marginRight={12} paddingBottom={1}></Image>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Heading as='h4' size='md' color='blackAlpha.700'>
            Home
          </Heading>
        </Link>
        <Spacer />
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <Text
            size='lg'
            fontWeight={400}
            fontSize={18}
            marginRight={6}
            color='blackAlpha.700'
          >
            Login
          </Text>
        </Link>
        <Link to='/signup'>
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
        </Link>
      </Flex>
      {children}
      <Flex alignItems='flex-start' paddingBottom={10}>
        <Image src={logo} marginTop={10}></Image>
      </Flex>
    </Container>
  );
};

export default Layout;
