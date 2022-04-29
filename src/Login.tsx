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
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';

const Login = () => {
  return (
    <HStack>
      <Box>
        <Flex>
          <Image src={logo}></Image>
          <Link to='/search'>
            <Text>Back to campgrounds</Text>
          </Link>
        </Flex>

        <VStack>
          <Heading>Start exploring camps from all around the world.</Heading>
          <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' placeholder='johndoe@mail.com' />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type='password'
              placeholder='Enter Your Password'
            />
            <Button
              backgroundColor='blackAlpha.900'
              color='white'
              colorScheme='blackAlpha'
              variant='solid'
              paddingY={6}
              marginY={2}
            >
              Login
            </Button>
          </FormControl>
        </VStack>
      </Box>

      <Box>
        <Heading></Heading>
        <HStack>
          <Image></Image>
          <VStack>
            <Heading></Heading>
            <Text></Text>
          </VStack>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Login;
