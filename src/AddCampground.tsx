import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from './Layout';

const AddCampground = () => {
  return (
    <Layout>
      <Flex
        w='100%'
        h='calc(100vh - 190px)'
        flexDirection='column'
        alignItems='center'
        paddingTop={20}
      >
        <VStack w='50%' alignItems='flex-start'>
          <Heading>Add New Campground</Heading>
          <FormControl>
            <FormLabel htmlFor='email' marginTop={6}>
              Campground name
            </FormLabel>
            <Input
              id='campground_name'
              type='text'
              placeholder='Latik Riverside'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
            />
            <FormLabel htmlFor='price'>Price</FormLabel>
            <Input
              id='price'
              type='number'
              placeholder='$140'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
            />
            <FormLabel htmlFor='image'>Image URL</FormLabel>
            <Input
              id='image'
              type='text'
              placeholder='image url'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
            />
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Input
              id='image'
              type='text'
              placeholder='Description'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
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
            >
              Add Campground
            </Button>
          </FormControl>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default AddCampground;
