import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header";
import Footer from "./Footer";

import Homepage from "./pages/Home/home";
import Diplomapage from "./pages/Diploma/diploma";
import Projectpage from "./pages/Projects/project";
import Contactpage from "./pages/Contact/contact";

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/projects' element={<Projectpage />}/>
        <Route path='/diploma' element={<Diplomapage />}/>
        <Route path='/contact' element={<Contactpage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// <Route path='/Resume' element={<Resumepage />}/>