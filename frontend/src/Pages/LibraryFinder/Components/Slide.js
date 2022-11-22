import { useDisclosure, Button, Slide, Box, Lorem} from "@chakra-ui/react"
import Form from "./Form"


function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Show Filters</Button>
        <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='black'
            mt='0'
            bg='teal.500'
            rounded='md'
            shadow='md'
            height='100%'
            width='33%'
          >
            <Form func={onToggle}></Form>
          </Box>
        </Slide>
      </>
    )
  }

export default SlideEx;