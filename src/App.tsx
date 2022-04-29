import * as React from 'react';
import {
  Box,
  Text,
  Button,
  Image,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/react';
import hero from './assets/Hero Image.jpg';
import logo from './assets/Logo.svg';
import airbnb from './assets/Airbnb.svg';
import booking from './assets/Booking.svg';
import plum from './assets/Plum Guide.svg';
import check from './assets/Checkmark.svg';
import { Link } from 'react-router-dom';

export const App = () => (
  <HStack overflowY='hidden'>
    <Box w='55%' h='100vh' p='10%'>
      <Box w='80%'>
        <Image src={logo} alt='logo' marginBottom={20}></Image>
        <Heading as='h1' size='3xl'>
          Explore the best camps on Earth.
        </Heading>
        <Text marginY={6} fontSize='lg' color='blackAlpha.700'>
          Yelpcamp is a curated list of the best camping spots on Earth.
          Unfiltered and unbiased reviews
        </Text>
        <VStack
          h='100px'
          alignItems='flex-start'
          justifyContent='space-between'
          marginBottom={6}
          color='blackAlpha.700'
        >
          <HStack>
            <Image src={check}></Image>
            <Text>Add your own camp suggestions.</Text>
          </HStack>
          <HStack>
            <Image src={check}></Image>
            <Text>Leave reviews and experiences.</Text>
          </HStack>
          <HStack>
            <Image src={check}></Image>
            <Text>See locations for all camps.</Text>
          </HStack>
        </VStack>
        <Link to='/search'>
          <Button
            backgroundColor='blackAlpha.900'
            color='white'
            colorScheme='blackAlpha'
            variant='solid'
            paddingY={6}
            marginY={2}
          >
            View Campgrounds
          </Button>
        </Link>
        <Text marginTop={6} color='blackAlpha.700'>
          Partnered with:
        </Text>
        <HStack>
          <Image src={airbnb}></Image>
          <Image src={booking}></Image>
          <Image src={plum}></Image>
        </HStack>
      </Box>
    </Box>
    <Box w='45%' h='100vh' m={0}>
      <Image src={hero} w='100%' h='auto'></Image>
    </Box>
  </HStack>
);
