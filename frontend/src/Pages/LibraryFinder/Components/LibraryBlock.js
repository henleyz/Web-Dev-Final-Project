import {   Accordion,Box,  Link,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Card, Progress,
   CardHeader, CircularProgress, CircularProgressLabel, CardBody, CardFooter, Image, Stack, Heading, Button, Divider,ButtonGroup, Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import CommentBox from './CommentBox.js'
import {ChatIcon} from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
const LibraryBlock = (props) => {

  const [loading, setloading] = useState(true);
  const [data, SetData] = useState();
  useEffect(()=>{getData()

  }, [])

  const getData = () => {
    axios.get("http://localhost:3000/library/", {params:{libname: props.name }}).then(setloading(false)).then((body) => (SetData(body.data))).catch((error) => console.log(error))
    console.log(data)
  }





  let hrefLink = '/library/' + props.name.replace(/ /g,'');

  const content = loading ?  <div>loading </div> :
<Stack padding={'5'} mineight="300px">
<Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  minH="300px"
  maxH="300px"
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
      {data.short_description}
      <Text py='2'> 
      {data.long_description}
      </Text>
      <Progress  value={64} />
      loudness
      <CircularProgress value={40} color='green.400'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
busyness
<CircularProgress value={40} color='green.400'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
    </CardBody>

    <CardFooter><Link href={hrefLink}>
      <Button variant='solid' colorScheme='blue'>
        vistit
      </Button></Link>
      
    </CardFooter>
    <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <ChatIcon
                key={i}
                color={i < props.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.reviewCount} reviews
          </Box>
          </Box>
  </Stack>
</Card>



</Stack>

return <div>{content}</div>

}
export default LibraryBlock;