import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import map from './assets/Map.png';

const Campground = () => {
  const [data, setData] = useState<any>();
  const params = useParams();

  useEffect(() => {
    onSnapshot(collection(db, 'campgrounds'), (snap) => {
      snap.docs.map((el) => {
        console.log(params.id);
        if (el.data().id == params.id) {
          console.log(el.data());
          setData(el.data());
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
        <HStack>
          <Flex w='50%'>
            <Image src={map}></Image>
          </Flex>
          <VStack w='50%'>
            {data ? (
              <Box>
                <Image src={data.imageUrl}></Image>
                <HStack>
                  <Heading>{data.name}</Heading>
                  <Text>{`${data.price}.00$`}</Text>
                </HStack>
                <Text>{data.description}</Text>
              </Box>
            ) : (
              ''
            )}
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Campground;
