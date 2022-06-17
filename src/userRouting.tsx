import React  from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { HOME, ABOUT, BLOG, ADOPTION, HELP, ADMIN, LOGIN } from './route/Routes';
import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';
import AboutPage from './components/aboutPage/aboutPage';
import BlogListPage from './components/blogListPage/blogListPage';
import BlogPage from './components/blogPage/blogPage';
import PetsListPage from './components/petsListPage/petsListPage';
import PetPage from './components/petPage/petPage';
import HelpPage from './components/helpPage/helpPage';
import { getPets } from './axios/pets';
import AdminPage from './components/adminPage/adminPage';
import LoginPage from './components/loginPage/loginPage';
import './App.css';



interface IProps{
    pets:IPet[];
    team: ITeam[];
    blogs: IBlogs[];
}


function UserRouting(props:IProps) {
 
  return (
    <BrowserRouter> 
        <Header/>
          <Switch>
            <Route exact path={HOME}>
              <HomePage blogs={props.blogs} pets={props.pets}/>
            </Route>
            <Route path={ABOUT}>
              <AboutPage blogs={props.blogs} team={props.team}/>
            </Route>
            <Route path={`${BLOG}/:id`}>
              <BlogPage blogs={props.blogs}/>
            </Route>
            <Route path={`${ADOPTION}/:id`}>
                <PetPage pets={props.pets}/>
            </Route>
            <Route path={BLOG}>
              <BlogListPage blogs={props.blogs}/>
            </Route>
            <Route path={ADOPTION}>
                <PetsListPage pets={props.pets}/>
            </Route>
            <Route path={HELP} component={HelpPage}/>
            <Route path={LOGIN} component={LoginPage}/>
          </Switch>
          <Footer/>
    </BrowserRouter>
  )
}

export default UserRouting;