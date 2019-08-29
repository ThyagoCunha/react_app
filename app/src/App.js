import React, { Fragment } from 'react';
import BoardCool from './components/BoardCool/index.js';
import SqueareCool from './components/SquareCool/index.js';


// function App() {
//   return (
//     <h1>Hello World</h1>
//   );
// }

const App = ()=> (
  <Fragment>
    <BoardCool>
      <SqueareCool />
    </BoardCool>
    
  </Fragment>
);

export default App;
