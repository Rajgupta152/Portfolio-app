import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import {Route, Routes } from 'react-router-dom';



function App() {
 
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/About' element = {<About/>}></Route>
        <Route path='/Project' element = {<Project/>}></Route>
        <Route path='/Contact' element = {<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
