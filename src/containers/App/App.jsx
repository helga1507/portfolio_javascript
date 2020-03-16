import React from 'react';
import {ThemeProvider} from 'styled-components'
import Todos from '@apps/todos';
import theme from '@core/theme';
import Temp from "../Temp";

const App = (props) => {
  console.log('theme',theme)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>Hello World</div>
        <Temp/>
        <Todos/>
      </div>
    </ThemeProvider>
  );
};

export default App;
