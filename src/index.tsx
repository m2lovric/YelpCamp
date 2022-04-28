import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from '@chakra-ui/react';
import lightTheme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
