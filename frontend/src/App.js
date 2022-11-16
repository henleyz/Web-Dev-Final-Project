import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import NavBar from './Components/NavBar.tsx'
import LibraryBlock from './Components/LibraryBlock.js'
import LibraryHeading from './Components/LibraryHeading';

function App() {
  return (
  <ChakraProvider>
    <NavBar></NavBar>
    <LibraryHeading></LibraryHeading>
    <Box m={[10, 50]}>    
    <LibraryBlock></LibraryBlock>
    
    <LibraryBlock></LibraryBlock>
    <LibraryBlock></LibraryBlock>
    <LibraryBlock></LibraryBlock>
    <LibraryBlock></LibraryBlock>
    <LibraryBlock></LibraryBlock></Box>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ChakraProvider>
  );
  
}

export default App;
