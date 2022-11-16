import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import NavBar from './Components/NavBar.tsx'
import LibraryBlock from './Components/LibraryBlock.js'
import LibraryHeading from './Components/LibraryHeading';
import LibaryList from './Components/LibraryList';

function App() {
  return (
  <ChakraProvider>
    <NavBar></NavBar>
    <LibraryHeading></LibraryHeading>
    <LibaryList></LibaryList>
    </ChakraProvider>
  );
  
}

export default App;
