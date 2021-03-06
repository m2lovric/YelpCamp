import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Main from './Main';
import { ChakraProvider } from '@chakra-ui/react';
import lightTheme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Campground from './Campground';
import AddCampground from './AddCampground';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={lightTheme}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/main' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/campground/:id' element={<Campground />} />
        <Route path='/addcampground' element={<AddCampground />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
