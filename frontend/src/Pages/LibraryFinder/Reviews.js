import {Box, Card, FormControl, FormLabel, Input, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, HStack} from "@chakra-ui/react"
import axios from "axios";
import { useState , useEffect, getElementById} from "react";
import ReviewBlock from "./ReviewBlock";
import { Rating } from 'react-simple-star-rating'

const Reviews = (props) => {
    const [list, setList] = useState([]);
    const [username, setUsername] = useState(props.username);
    const [title, setTitle] = useState(false);
    const [body, setBody] = useState(false);
    const LibraryName = props.name;
    useEffect(()=>{
        getReviews();
    }, [])
    const [rating, setRating] = useState(5)
    var rattting
    const handleRating = (rate) => {
        rattting = rate;
    }
     var posts = list.map((i) => <ReviewBlock key={i.name} title={i.title} body={i.body} name={i.name} rating={i.rating}></ReviewBlock>);
    //get request

    const update = (props) => {
        setList(posts => [props, ...posts]);
    }
    

    const SubmitReviewForm = () => {
        const UsernameForm = () => { 
        if(username === null) {
            return (
                <FormControl id="Username" isRequired>
              <FormLabel>User name</FormLabel>
              <Input type="text"/>
            </FormControl>
            )
        } else {
            return (<Box></Box>)
        }
        }
        function updateForm(){
            const title = document.getElementById('title').value;
            const body = document.getElementById('body').value;
            setTitle(title);
            setBody(body);
        }
 
        return(
                <Box>
                    <Heading lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>Submit a review here!</Heading>
                    <UsernameForm/>
                    <Rating
                    onClick={handleRating}
                    id="rating"
                    size={50}
                    transition
                    allowFraction
                    showTooltip
                    display="inline"
                  />
                  
            <FormControl id="text" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" id="title" />
            </FormControl>
            <FormControl id="text" isRequired>
              <FormLabel>Body</FormLabel>
              <Box border="10px"><textarea rows="4" cols="50" id="body"/></Box>
              
            </FormControl>
            <Button onClick={submitReview}>Submit</Button>
            </Box>
        )
    }

    function submitReview() {
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        console.log(title, body, rattting)
        dummyReviewList.push({name: username, title: title, body:body, rating:rattting})
        getReviews();
        console.log(dummyReviewList);
        //axios.post("http://localhost:3000/" + {LibraryName} + "/review", {username: username, title: title, body:body, rating:rating}).then(getReviews())
    }
    var dummyReviewList = [{name:"oski", title: "shit library", rating:2, body:"this libray is really loud, people shouting, people smell bad and hot and sweaty. i hate this library. "},
                                {name:"oski2", title: "ok library", rating:4, body:"not a bad lirbary, but gets busy"},
                                {name:"oski3", title: "ok library", rating:5, body:"i saw oski here, so this librarby is the best. "}]
    const getReviews = () => {
        setList([]);
     for (const review of dummyReviewList) {
        update(review);
    }}

        return(
            <Box>
                <SubmitReviewForm></SubmitReviewForm>
                <HStack flexWrap>{posts}</HStack>
            </Box>
            

)               
}
export default Reviews