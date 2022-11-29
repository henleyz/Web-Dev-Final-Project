import {Box, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
const ReviewBlock = (props) => {
    return(
      <Card maxW='sm'>
  <CardBody>

    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.title}</Heading>
      <Text>
        {props.body}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {props.rating}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   
  </CardFooter>
</Card>
    )
}
export default ReviewBlock;