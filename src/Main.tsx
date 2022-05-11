import {
  Box,
  Heading,
  Text,
  Input,
  HStack,
  Button,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { campground } from './interfaces';

const Main = () => {
  const [data, setData] = useState<campground[]>([]);
  const [filteredData, setFilteredData] = useState<campground[]>([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    onSnapshot(collection(db, 'campgrounds'), (snap) => {
      snap.docs.map((el) => {
        const newData = el.data() as campground;
        setData((oldArr) => [...oldArr, newData]);
      });
    });
  }, []);

  const handleFilterData = () => {
    const filData = data.filter((el) => el.name.toLowerCase().includes(search));
    setFilteredData([...filData]);
  };

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
          <VStack w='35%' alignItems='flex-start'>
            <Heading>Welcome to YelpCamp!</Heading>
            <Text paddingBottom={4}>
              View our hand-picked campgrounds from all over the world, or add
              your own.
            </Text>
            <HStack w='100%' paddingBottom={4}>
              <Input
                placeholder='Search for camps'
                backgroundColor='white'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                  handleFilterData();
                }}
              />
              <Button
                backgroundColor='blackAlpha.900'
                color='white'
                colorScheme='blackAlpha'
                variant='solid'
              >
                Search
              </Button>
            </HStack>
            <Link to='/addcampground'>
              <Text>Or add your own campground</Text>
            </Link>
          </VStack>
        </Box>
      </Box>

      <Flex marginTop={8} justifyContent='space-between' flexFlow='wrap'>
        {data &&
          (search ? filteredData : data).map((el) => {
            return (
              <Box
                w={['100%', '30%']}
                key={el.id}
                border='1px'
                borderColor='gray.200'
                borderRadius={4}
                marginBottom={4}
              >
                <VStack alignItems='flex-start' w='100%' padding={4}>
                  <Image
                    src={el.imageUrl}
                    width='100%'
                    height='200px'
                    objectFit='cover'
                    borderRadius={4}
                  ></Image>
                  <Heading as='h4' size='lg' paddingTop={3}>
                    {el.name}
                  </Heading>
                  <Text paddingBottom={3}>{el.shortDesc}</Text>
                  <Link to={`/campground/${el.id}`} style={{ width: '100%' }}>
                    <Button w='100%'>View Campground</Button>
                  </Link>
                </VStack>
              </Box>
            );
          })}
      </Flex>
    </Layout>
  );
};

export default Main;