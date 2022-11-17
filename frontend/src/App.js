import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import NavBar from './Pages/LibraryFinder/Components/NavBar.tsx'
import LibraryBlock from './Pages/LibraryFinder/Components/LibraryBlock.js'
import LibraryHeading from './Pages/LibraryFinder/Components/LibraryHeading';
import LibaryList from './Pages/LibraryFinder/Components/LibraryList';
import FindLibraries from './Pages/LibraryFinder/FindLibraries';


function App() {
  return (
    <ChakraProvider>
    <Router>
    <NavBar />
    <Routes>
        {/* <Route exact path='/'  element={<Another Page/>} /> */}
        <Route exact path='/libraries'  element={<FindLibraries />} />
    </Routes>
    </Router>
    </ChakraProvider>
  );
  
}

export default App;
