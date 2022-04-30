import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Search from './Search';
import { ChakraProvider } from '@chakra-ui/react';
import lightTheme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={lightTheme}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
