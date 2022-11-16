import React, { useState } from "react";
import LibraryBlock from "./LibraryBlock";
import axios from "axios";

const LibaryList = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([]);

    /* Use the map() function to render multiple Blocks! */
     // TODO: edit this variable

    const update = (props) => {
        setList(posts => [props, ...posts]);
        console.log(props)
    }

    const posts = list.map((item) => <LibraryBlock key="{item}" name={item.name} description={item.description} image={item.image}></LibraryBlock>);

    const getList = () => {
        //axios.get(`backendShit`, {timeout: 10 * 1000}).then((body) => {
		//console.log("Received response from server for Q2: ", body.data);
		//const libraries = body.data;
        setList([]);
        const libraries = [{name: 'oski library', description:"where to find oskis's torture chamber", image:'https://pbs.twimg.com/profile_images/1276527827848818688/dfr7_4Kn_400x400.jpg'},
        {name: 'bear library', description:"i like bears", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}]
        for(const library of libraries) {
            console.log(library)
            update(library)
        }
    }
    //)


   return (
        <div>
             <button onClick={getList}>Get Libaries</button>
             {posts}
        </div>

    );
}

export default LibaryList;