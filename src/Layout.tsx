import {
  Flex,
  Spacer,
  Image,
  Heading,
  Container,
  Button,
  Text,
} from '@chakra-ui/react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';
import { auth } from './firebase';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
        setUser(user);
      } else {
        setLogged(false);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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
        {logged ? (
          <>
            <Text
              size='lg'
              fontWeight={400}
              fontSize={18}
              marginRight={6}
              color='blackAlpha.700'
            >
              {user?.email}
            </Text>
            <Button
              backgroundColor='blackAlpha.900'
              color='white'
              colorScheme='blackAlpha'
              variant='solid'
              paddingY={6}
              marginY={2}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
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
          </>
        )}
      </Flex>
      {children}
      <Flex alignItems='flex-start' paddingBottom={10}>
        <Image src={logo} marginTop={10}></Image>
      </Flex>
    </Container>
  );
};

export default Layout;
