import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Link, useParams } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import map from './assets/Map.png';
import { campground } from './interfaces';

const Campground = () => {
  const [data, setData] = useState<campground>();
  const [comment, setComment] = useState('');
  const params = useParams();

  useEffect(() => {
    onSnapshot(collection(db, 'campgrounds'), (snap) => {
      snap.docs.map((el) => {
        console.log(params.id);
        if (el.data().id == params.id) {
          console.log(el.data());
          setData(el.data() as campground);
        }
      });
    });
  }, []);

  return (
    <Layout>
      <VStack>
        <Flex justifyContent='flex-end' w='100%' marginY={10}>
          <Link to='/search'>
            <Text color='blue.400'>Back to Campgrounds</Text>
          </Link>
        </Flex>
        <HStack justifyContent='space-between' alignItems='flex-start'>
          <VStack
            w='30%'
            h='100vh'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Box
              justifyContent='center'
              marginBottom='auto'
              alignItems='center'
              padding='7%'
              border='1px'
              borderColor='blackAlpha.200'
              borderRadius={8}
            >
              <Image src={map}></Image>
            </Box>
          </VStack>
          <VStack w='65%'>
            {data ? (
              <Box
                w='100%'
                padding='7%'
                border='1px'
                borderColor='blackAlpha.200'
                borderRadius={8}
              >
                <Image
                  src={data.imageUrl}
                  marginBottom={8}
                  borderRadius={6}
                ></Image>
                <HStack justifyContent='space-between'>
                  <Heading as='h4' size='lg'>
                    {data.name}
                  </Heading>
                  <Text>{`${data.price}.00$`}</Text>
                </HStack>
                <Text fontWeight={300} marginTop={4}>
                  {data.description}
                </Text>
              </Box>
            ) : (
              ''
            )}
            <Box
              w='100%'
              padding='5%'
              border='1px'
              borderColor='blackAlpha.200'
              borderRadius={8}
            >
              <VStack>
                {data
                  ? 'comments' in data
                    ? data.comments.map((el: any, i: any) => {
                        return (
                          <Box
                            key={i}
                            w='100%'
                            marginY='16px'
                            paddingTop={4}
                            paddingBottom={8}
                            borderBottom='1px'
                            borderColor='blackAlpha.100'
                          >
                            <Heading as='h5' size='sm'>
                              {el.name}
                            </Heading>
                            <Text fontWeight={300} size='sm'>
                              {el.comment}
                            </Text>
                          </Box>
                        );
                      })
                    : ''
                  : ''}
                <HStack w='100%'>
                  <Input
                    placeholder='Add comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Button>Send</Button>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Campground;
