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
  useEffect(()=>{getData()}, [])

  const getData = () => {

    axios.get("http://localhost:3000/library/", {params:{libname: props.name }}).then((body) => (SetData(body.data))).then(setloading(false)).catch((error) => console.log(error))
    if (data === undefined) {
      return (<div></div>)
    }
    console.log(data)
  }


  


  let hrefLink = '/library/' + props.name.replace(/ /g,'');

  const content = (data===undefined) ? <div> loading </div> :
<Stack padding={'5'} mineight="300px">
<Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  minH="300px"
  maxH="300px"
  minW="100%"
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
      <Heading size='md'>{props.name}</Heading>
      {data.open_time} - {data.close_time}
      <Text py='2'> 
{data.short_description}                                           
      </Text>
      <HStack></HStack>
      loudness
      <CircularProgress value={data.loudness} color='green.400'>
  <CircularProgressLabel>{data.loudness}</CircularProgressLabel>
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
</Card>



</Stack>

return <div>{content}</div>

}
export default LibraryBlock;