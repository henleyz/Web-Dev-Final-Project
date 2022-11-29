import {Box, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
import { useState , useEffect} from "react";
import ReviewBlock from "./ReviewBlock";
const Reviews = (props) => {
    const [list, setList] = useState([]);
    const name = props.name;
    useEffect(()=>{
        getReviews();
    }, [])


//     const ReviewBlock = (props) =>{
//         <Card maxW='sm'>
//   <CardBody>
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>{props.title}</Heading>
//       <Text>
//         {props.body}
//       </Text>
 
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>     <Text color='blue.600' fontSize='2xl'>
//         {props.rating}
//       </Text>
//   </CardFooter>
// </Card>
//     }
     var posts = list.map((i) => <ReviewBlock key={i.name} title={i.title} body={i.body} rating={i.rating}></ReviewBlock>);
    //get request

    const update = (props) => {
        setList(posts => [props, ...posts]);
    }



    const dummyReviewList = [{name:"eufioski", title: "shit library", rating:2, body:"this libray is really loud, people smell bad and hot as fuck. i hate this library. "},
                                {name:"woski2", title: "ok library", rating:4, body:"not a bad lirbary, but gets busy"},
                                {name:"doski3", title: "ok library", rating:5, body:"i saw oski here, so this librarby is the best. "}]
    const getReviews = () => {
        setList([]);
     for (const review of dummyReviewList) {
        update(review);
    }}

        return(
            <Box>{posts}</Box>

)               
}
export default Reviews