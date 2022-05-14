import React  from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HOME, ABOUT, BLOG, ADOPTION } from './route/Routes';
import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
import AboutPage from './components/aboutPage/aboutPage';
import BlogListPage from './components/blogListPage/blogListPage';
import BlogPage from './components/blogPage/blogPage';
import PetsListPage from './components/petsListPage/petsListPage';
import PetPage from './components/petPage/petPage';
import './App.css';




function App() {

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
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;