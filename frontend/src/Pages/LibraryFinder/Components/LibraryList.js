import React, { useState,useEffect } from "react";
import LibraryBlock from "./LibraryBlock";
import {Button, Box} from '@chakra-ui/react';
import axios from "axios";
import SlideEx from "./Slide";


const LibaryList = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([]);

    useEffect(() => {
        //getList()
     });

    /* Use the map() function to render multiple Blocks! */
     // TODO: edit this variable

    const update = (props) => {
        setList(posts => [props, ...posts]);
    }

    const posts = list.map((item) => <LibraryBlock key="{item}" name={item.name} description={item.description} image={item.image}></LibraryBlock>);

    const getList = () => {
        //axios.get(`backendShit`, {timeout: 10 * 1000}).then((body) => {
		//console.log("Received response from server for Q2: ", body.data);
		//const libraries = body.data;
        setList([]);
        //sample data
        const libraries = [{name: 'oski library', description:"where to find oskis's torture chamber", image:'https://pbs.twimg.com/profile_images/1276527827848818688/dfr7_4Kn_400x400.jpg'},
        {name: 'bear library', description:"i like bears", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
      ,  {name: 'library 3', description:"This is libary 3 descriotoin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
,{name: 'library 4', description:"THis is libaraby 4 descrpotion.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
,  {name: 'library 5', description:"This is libary 5 descriotoin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
,{name: 'library 6', description:"THis is libaraby 6 descrpotion.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}

    ]
        libraries.reverse();
        for(const library of libraries) {
            update(library)
        }
    }

    
    //)


   return (
        <div>
            <SlideEx></SlideEx>
             <Button margin='10' variant='solid' colorScheme='blue' onClick={getList}>Get Libaries</Button>
             <Box margin="20" maxWidth="1500px">{posts}</Box>
        </div>

    );
}

export default LibaryList;