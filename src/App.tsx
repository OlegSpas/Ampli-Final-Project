import React  from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HOME, ABOUT, BLOG, ADOPTION, HELP } from './route/Routes';
import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
import AboutPage from './components/aboutPage/aboutPage';
import BlogListPage from './components/blogListPage/blogListPage';
import BlogPage from './components/blogPage/blogPage';
import PetsListPage from './components/petsListPage/petsListPage';
import PetPage from './components/petPage/petPage';
import HelpPage from './components/helpPage/helpPage';
import './App.css';
import { getUsers } from './axios/users';




function App() {
 getUsers().then(x => {
   console.log(x)
 })
  return (
    <BrowserRouter> 
      <Header/>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route path={ABOUT} component={AboutPage} />
        <Route path={`${BLOG}/:id`} component={BlogPage}/> 
        <Route path={`${ADOPTION}/:id`} component={PetPage}/>
        {/* ЗАПИТАТИСЬ ЗА РОЗМІЩЕННЯ ЧОМУ ЯКЩО БЛОГ АЙДІ НИЖЧЕ, ТО НЕ ПРАЦЮЄ */}
        <Route path={BLOG} component={BlogListPage} />
        {/* <Route path={`${BLOG}/:id`} component={BlogPage}/>  */}
        <Route path={ADOPTION} component={PetsListPage}/>
        <Route path={HELP} component={HelpPage}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;