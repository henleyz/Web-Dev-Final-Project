

import { ChakraProvider, Box } from '@chakra-ui/react'
import LibraryHeading from './Components/LibraryHeading';
import LibaryList from './Components/LibraryList';

function FindLibraries() {
  return (

    <div>
    <LibraryHeading></LibraryHeading>
    <LibaryList></LibaryList>
    </div>

  );
  
}

export default FindLibraries;
