import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Search from './Search';
import { ChakraProvider } from '@chakra-ui/react';
import lightTheme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={lightTheme}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
