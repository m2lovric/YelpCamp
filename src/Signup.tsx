import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  Heading,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';
import user from './assets/User Testimonial.svg';
import { auth } from './firebase';

const Signup = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((user) => {
        console.log(user.user);
        setUserData({ email: '', password: '' });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <HStack>
      <Flex w='55%' h='100vh' direction='column' paddingX='12%'>
        <Flex marginTop={16} justifyContent='space-between'>
          <Image src={logo}></Image>
          <Link to='/search'>
            <Text color='blackAlpha.700'>Back to campgrounds</Text>
          </Link>
        </Flex>

        <VStack marginTop='20%'>
          <Heading as='h1'>
            Start exploring camps from all around the world.
          </Heading>
          <FormControl>
            <FormLabel htmlFor='email' marginTop={6}>
              Email address
            </FormLabel>
            <Input
              id='email'
              type='email'
              placeholder='johndoe@mail.com'
              h={16}
              marginBottom={6}
              value={userData.email}
              onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type='password'
              placeholder='Enter Your Password'
              h={16}
              marginBottom={6}
              value={userData.password}
              onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
            <Button
              backgroundColor='blackAlpha.900'
              color='white'
              colorScheme='blackAlpha'
              variant='solid'
              paddingY={6}
              marginY={2}
              h={16}
              w='100%'
              onClick={() => handleSubmit()}
            >
              Create an account
            </Button>
          </FormControl>
          <HStack w='100%'>
            <Text>Already a user?</Text>
            <Link to='/login'>
              <Text color='blue.400' fontWeight={600}>
                Sign In
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Flex>

      <Flex
        w='45%'
        h='100vh'
        justifyContent='center'
        alignItems='flex-start'
        direction='column'
        backgroundColor='blackAlpha.50'
        paddingX='13%'
      >
        <Heading as='h4' size='lg' lineHeight={10}>
          "YelpCamp has honestly saved me hours of research time, and the camps
          on here are definitely well picked and added"
        </Heading>
        <HStack marginTop={8}>
          <Image src={user}></Image>
          <VStack alignItems='center' justifyContent='center'>
            <Heading as='h6' size='sm' alignSelf='flex-start' lineHeight={1}>
              May Andrews
            </Heading>
            <Text fontWeight={300}>Professional Hiker</Text>
          </VStack>
        </HStack>
      </Flex>
    </HStack>
  );
};

export default Signup;
