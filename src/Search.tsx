import {
  Box,
  Heading,
  Text,
  Input,
  HStack,
  Button,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Search = () => {
  const [data, setData] = useState();
  useEffect(() => {
    onSnapshot(collection(db, 'campgrounds'), (snap) => {
      snap.docs.map((el) => {
        console.log(el.data());
      });
    });
  }, []);

  return (
    <Layout>
      <Box>
        <Box
          paddingY={20}
          paddingX={10}
          borderRadius={12}
          marginTop={10}
          backgroundColor='blackAlpha.100'
        >
          <VStack w='30%' alignItems='flex-start'>
            <Heading>Welcome to YelpCamp!</Heading>
            <Text paddingBottom={4}>
              View our hand-picked campgrounds from all over the world, or add
              your own.
            </Text>
            <HStack w='100%' paddingBottom={4}>
              <Input placeholder='Search for camps' backgroundColor='white' />
              <Button
                backgroundColor='blackAlpha.900'
                color='white'
                colorScheme='blackAlpha'
                variant='solid'
              >
                Search
              </Button>
            </HStack>
            <Text>Or add your own campground</Text>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Search;
