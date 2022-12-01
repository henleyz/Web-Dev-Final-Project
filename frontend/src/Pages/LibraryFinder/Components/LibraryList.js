import React, { useState,useEffect } from "react";
import LibraryBlock from "./LibraryBlock";
import {Button, Box, Stack, Show, HStack, Flex, Hide, Spacer} from '@chakra-ui/react';
import axios from "axios";
import SlideEx from "./Slide";
import Form from "./Form";


const LibaryList = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([]);
    const [loud, setLoud] = useState(50);
    const [open, setOpen] = useState(true);
    const [distance, setDistance] = useState(50)
    const [busy, setBusy] = useState(50);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        getListHelper();
    }, [])

    /* Use the map() function to render multiple Blocks! */
     // TODO: edit this variable

    const update = (props) => {
        setList(posts => [props, ...posts]);
    }

    var posts = list.map((i) => <LibraryBlock key={i} name={i}></LibraryBlock>);

    const getList = (open, busy, distance, loud, lat, lng) => {
        console.log("send api request with")
        console.log("isopen: "+ open  +" busy: "+busy +  "distance: " + distance + "loud: " + loud + "location: " + lat +", " +  lng+". ")
        axios.get("http://localhost:3000/library/prefer", {isOpen:open, busyness:busy, distance:distance, loudness:loud, lat:lat, lng:lng}).then((data) => setData(data))
        //axios.get(`backendShit`, {timeout: 10 * 1000}).then((body) => {
		//console.log("Received response from server : ", body.data);
		//const libraries = body.data;
        setList([]);
        //sample data
        const libraries = ["moffit", "kresge", "mainstack", "business"]

    
        libraries.reverse();
        for(const library of libraries) {
            update(library)
        }
    }

    const getListHelper = () => {
        getList(open, busy, distance, loud, lat, lng)
    }
    function updateSearchParameters(o, b, d, l, lat, lng){
        setOpen(o);
        setBusy(b);
        setDistance(d);
        setLoud(l);
        setLat(lat);
        setLng(lng);
        getListHelper();
    }
    let show = function() {
        console.log('Anonymous function');
    };
    

   return (           <div> <Show below="1000px">
            <SlideEx data={{open:open, busy:busy, distance:distance, loud:loud}} apply={updateSearchParameters}></SlideEx>
            </Show>
        <Flex margin="10">
            <Show above='1000px'> 
            <Form data={{open:open, busy:busy, distance:distance, loud:loud}} minW="3000" func={show} apply={updateSearchParameters}></Form>
            </Show>
           

             <Stack marginLeft="100px" width="100%" marginRight="200px">
             {/* <Button variant='solid' colorScheme='blue' onClick={getListHelper}>Get Libaries</Button> */}
             {posts}</Stack>
        </Flex>
</div>
    );
}

export default LibaryList;