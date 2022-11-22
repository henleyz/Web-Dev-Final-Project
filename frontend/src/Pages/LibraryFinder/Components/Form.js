import { Box, Button, Heading } from "@chakra-ui/react";
import SliderMarkExample from "./Slider";
import location from "./location";
import { useState } from "react";
import onToggle from './Slide'


const Form = (props) => {
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);




    const getLocation = () => {
        if(!navigator.geolocation){setStatus("not supported")} else{
            setStatus("locating");

        
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }, () => {setStatus('unable to get location');});}};

    return(
       <Box margin={2}>
        <Button onClick={getLocation}>get location</Button>
        <Heading>location</Heading>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
<Box>Loudness <SliderMarkExample></SliderMarkExample>

</Box>
<Button onClick={props.func}>Apply FIlters</Button>
        </Box> 
    )
}

export default Form;