import React  from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HOME, ABOUT, BLOG } from './route/Routes';
import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
import AboutPage from './components/aboutPage/aboutPage';
import BlogListPage from './components/blogListPage/blogListPage';
import './App.css';



function App() {

  return (
    <BrowserRouter> 
      <Header/>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route path={ABOUT} component={AboutPage} />
        <Route path={BLOG} component={BlogListPage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;