import React  from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HOME } from './route/Routes';
import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import './App.css';
import Footer from './components/footer/footer';



function App() {

  return (
    <BrowserRouter> 
      <Header/>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;