import {
  Box,
  Textarea,
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
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

const AddCampground = () => {
  const navigation = useNavigate();
  const [campground, setCampground] = useState({
    name: '',
    price: 0,
    imageUrl: '',
    shortDesc: '',
    description: '',
  });

  const onSubmit = async () => {
    await addDoc(collection(db, 'campgrounds'), {
      ...campground,
    }).then((res) => {
      setCampground({
        name: '',
        price: 0,
        imageUrl: '',
        shortDesc: '',
        description: '',
      });
      navigation('../main', { replace: true });
    });
  };

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
              value={campground.name}
              onChange={(e) =>
                setCampground({ ...campground, name: e.target.value })
              }
            />
            <FormLabel htmlFor='price'>Price</FormLabel>
            <Input
              id='price'
              type='number'
              placeholder='$140'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
              value={campground.price}
              onChange={(e) =>
                setCampground({
                  ...campground,
                  price: parseInt(e.target.value),
                })
              }
            />
            <FormLabel htmlFor='image'>Image URL</FormLabel>
            <Input
              id='image'
              type='text'
              placeholder='image url'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
              value={campground.imageUrl}
              onChange={(e) =>
                setCampground({ ...campground, imageUrl: e.target.value })
              }
            />
            <FormLabel htmlFor='shortDesc'>Short Description</FormLabel>
            <Input
              id='shortDesc'
              type='text'
              placeholder='Short Description'
              h={16}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
              value={campground.shortDesc}
              onChange={(e) =>
                setCampground({ ...campground, shortDesc: e.target.value })
              }
            />
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea
              id='description'
              placeholder='Description'
              h={36}
              marginBottom={6}
              backgroundColor='blackAlpha.100'
              value={campground.description}
              onChange={(e) =>
                setCampground({ ...campground, description: e.target.value })
              }
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
              onClick={() => onSubmit()}
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
