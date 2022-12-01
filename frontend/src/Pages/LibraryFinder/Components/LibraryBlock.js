import {   Accordion,Box,  Link,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Card, Progress,
   CardHeader, CircularProgress, CircularProgressLabel, CardBody, CardFooter, Image, Stack, Heading, Button, Divider,ButtonGroup, Container, HStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import CommentBox from './CommentBox.js'
import {ChatIcon} from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { Rating } from "react-simple-star-rating";
import axios from 'axios'
const LibraryBlock = (props) => {

  const [loading, setloading] = useState(true);
  const [data, SetData] = useState();
  const [open, setopen] = useState(false);
  useEffect(()=>{getData()}, [])

  const getData = () => {

    axios.get("http://localhost:3000/library/", {params:{libname: props.name }}).then((body) => (SetData(body.data))).then(setloading(false)).catch((error) => console.log(error))
    if (data === undefined) {
      return (<div></div>)
    }
    console.log(data)
  }



  let hrefLink = '/library/' + props.name.replace(/ /g,'');

<<<<<<< Updated upstream
  const content = (data===undefined) ? <div> loading </div> : 
=======
  const content = (data===undefined) ? <div> loading </div> :
  
>>>>>>> Stashed changes
<Stack padding={'5'} mineight="300px">
<Link href={hrefLink}>
<Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  minH="300px"
  maxH="300px"
  minW="100%"
  backgroundColor={new Date().getHours() >= data.open_time && new Date().getHours() <= data.close_time ?  'white.100' : 'red.50'}
>
  <Image //pictrue
    minH="300px"
    minW="300px"
    maxH = "300px"
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={data.image1_link}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' color="red">{new Date().getHours() >= data.open_time && new Date().getHours() <= data.close_time ?  ' ' : 'CLOSED '}</Heading>
      <Heading size='md'>{data.full_name}</Heading>
      {data.open_time} - {data.close_time}
      <Text py='2'> 
{data.short_description}                                           
      </Text>
      <HStack></HStack>
      loudness
      <CircularProgress value={data.base_noise_level} color='green.400'>
  <CircularProgressLabel>{data.base_noise_level}</CircularProgressLabel>
</CircularProgress>
busyness
<CircularProgress value={data.busyness} color='green.400'>
  <CircularProgressLabel>{data.busyness}</CircularProgressLabel>
</CircularProgress>
<Rating readonly initialValue={data.rating}></Rating>
      <Text color='blue.600' fontSize='2xl'>
        {data.rating}/5
      </Text>
    </CardBody>

    <CardFooter><Link href={hrefLink}>
      <Button variant='solid' colorScheme='blue'>
        vistit
      </Button></Link>
      
    </CardFooter>
  
  </Stack>
</Card></Link>



</Stack>

return <div>{content}</div>

}
export default LibraryBlock;