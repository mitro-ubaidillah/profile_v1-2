import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import theme from './Utils/extendedTheme';

import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>    
  )
}

export default App
