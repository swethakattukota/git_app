// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Header from './Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Logo from './components/Logo';
import ImageGrid from './components/ImageGrid';

const App: React.FC = () => {
  return (
    // <Router>
    //   <div>
    //     <Header />
       
    //   </div>
    // </Router>
    <div>
    <ImageGrid />
    </div>
  );
};

export default App;
