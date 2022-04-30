import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Layout from './Layout';

const Campground = () => {
  return (
    <Layout>
      <HStack>
        <Flex>
          <Image></Image>
        </Flex>
        <VStack>
          <Box>
            <Image></Image>
            <HStack>
              <Heading></Heading>
              <Text></Text>
            </HStack>
            <Text></Text>
          </Box>
        </VStack>
      </HStack>
    </Layout>
  );
};

export default Campground;
