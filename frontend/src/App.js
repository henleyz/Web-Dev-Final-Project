import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import NavBar from './Pages/LibraryFinder/Components/NavBar.tsx'
import LibraryBlock from './Pages/LibraryFinder/Components/LibraryBlock.js'
import LibraryHeading from './Pages/LibraryFinder/Components/LibraryHeading';
import LibaryList from './Pages/LibraryFinder/Components/LibraryList';
import FindLibraries from './Pages/LibraryFinder/FindLibraries';
import SplitScreen from './Components/Homepage';
import SignupCard from './Components/Signup';


function App() {
  return (
    <ChakraProvider>
    <Router>
    <Routes>
        <Route exact path='/'  element={<SplitScreen />}/>
        <Route exact path='/libraries'  element={<FindLibraries />} />
        <Route exact path='/login'  element={<SignupCard/>} />
    </Routes>
    </Router>
    </ChakraProvider>
  );
  
}

export default App;
