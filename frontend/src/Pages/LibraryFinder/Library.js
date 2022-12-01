import React, { Component, useState, useEffect } from "react";
import { useParams,  } from "react-router-dom";
import NavBar from './Components/NavBar.tsx';
import dummyLibraryList from './dummyLibraryList';
import CustomGoogleMap from './GoogleMap.tsx'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    DrawerOverlay,
  } from '@chakra-ui/react';
import Reviews from "./Reviews";
import ReviewBlock from "./ReviewBlock";
import axios from "axios";
  
const dummyList = {
    moffit: {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Moffitt_exterior.JPG"
        ,description: "The James K. Moffitt Undergraduate Library, simply known as Moffitt Library, is a library situated at the crossroads of the University of California, Berkeley, designed by American activist John Carl Warnecke in the late 1960s as a cutting-edge library for undergraduates."
        ,hours: "8am  to 10 pm"
    }
,
oskilibrary: {
      image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Moffitt_exterior.JPG"
      ,description: "The James K. Moffitt Undergraduate Library, simply known as Moffitt Library, is a library situated at the crossroads of the University of California, Berkeley, designed by American activist John Carl Warnecke in the late 1960s as a cutting-edge library for undergraduates."
      ,hours: "8am  to 10 pm"
  }
}



const Library = () => {
    const [loading, setloading] = useState(true);
    useEffect(()=>{getData()

    }, [])

    const { id } = useParams();
    const [props, SetData] = useState();
    const getData = () =>{
          axios.get("http://localhost:3000/library/", {params:{libname:id}}).then(setloading(false)).then((body) => (SetData(body.data))).catch((error) => console.log(error))

    }
    
  

    const content = props === undefined ?  <div>loading </div> :
        <div>
        <NavBar></NavBar>
        
        <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
                src={ props.image1_link}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {id}
              </Heading>
              <Text
                color={'gray.900'}
                fontWeight={300}
                fontSize={'2xl'}>
                              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={'gray.200'}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={'gray.500'}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {props.short_description}
                </Text>
                <Text fontSize={'lg'}>
                {props.long_description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'yellow.500'}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={'yellow.500'}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'-moz-initial'}
              color={'white'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
        <CustomGoogleMap w='100%' h='500px' lat={props.latitude} long={props.longitude}></CustomGoogleMap>
<Reviews name={id}></Reviews>
      </Container>
         </div>
    return <div>{content} </div>
    };

export default Library;