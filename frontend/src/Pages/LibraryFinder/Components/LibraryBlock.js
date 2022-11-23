import {   Accordion,Box,  Link,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Card, Progress,
   CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button, Divider,ButtonGroup, Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import CommentBox from './CommentBox.js'
import {ChatIcon} from '@chakra-ui/icons'
const LibraryBlock = (props) => {
  let hrefLink = '/library/' + props.name;
  /* TODO */

  return (
<Stack padding={'5'}>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={props.image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{props.name}</Heading>

      <Text py='2'>
      {props.description}
      </Text>
      <Progress  value={64} />
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
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Reviews
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <CommentBox postId={props.name} comments={props.comments} ></CommentBox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


</Stack>

)

}
export default LibraryBlock;