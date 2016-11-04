import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
        <header>
            <h1>Welcome to React Starter</h1>
            <p>Clean, Minimal React starter</p>
        </header>
        {children}
 </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
