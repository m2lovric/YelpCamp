import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Search from './Search';
import { ChakraProvider } from '@chakra-ui/react';
import lightTheme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={lightTheme}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
