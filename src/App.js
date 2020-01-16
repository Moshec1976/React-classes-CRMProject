import React from 'react';
import './App.css';
import MainMenu from './views/mainMenu';
import Header from './views/header';
import Nav from './views/Nav';
import Footer from './views/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import AddNewClient from './views/AddNewClient';
import AddNewNote from './views/AddNewNote';
import ClientList from './views/ClientList';
import ClientID from './views/ClientID';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Route  path='/MainMenu' component={MainMenu} />
        <Route  path='/AddNewClient' component={AddNewClient} />
        <Route  path='/AddNewNote' component={AddNewNote} />
        <Route  path='/ClientList' component={ClientList} />
        <Route  path='/:ClientID' component={ClientID} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
