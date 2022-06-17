import React  from 'react';
import { Switch, Route, BrowserRouter, useLocation, Redirect } from 'react-router-dom';
import { HOME, ABOUT, BLOG, ADOPTION, HELP, ADMIN, LOGIN } from './route/Routes';
import { getPets } from './axios/pets';
import AdminPage from './components/adminPage/adminPage';
import LoginPage from './components/loginPage/loginPage';
import './App.css';
import UserRouting from './userRouting';
import UnknownPage from './components/unknownPage/unknownPage';
import LoadingPage from './components/loadingPage/loadingPage';
import { getUsers } from './axios/users';
import { getMessages } from './axios/messages';
import { getBlogs } from './axios/blogs';





function App() {

  const [ isLogged, setLogged ] = React.useState(true);
  const [ pets, setPets ] = React.useState<IPet[]>([]);
  const [ team, setTeam ] = React.useState<ITeam[]>([]);
  const [ messages, setMessages ] = React.useState<IMessages[]>([]);
  const [ blogs, setBlogs ] = React.useState<IBlogs[]>([]);
  const [ isLoading, setLoading ] = React.useState(true);


  React.useEffect(() => { 
    Promise.all([
      getPets().then(x => {
        setPets(x.data);
      }),
      getUsers().then( x => {
        setTeam(x.data)
      }),
      getMessages().then( x => {
        setMessages(x.data)
      }),
      getBlogs().then (x => {
        setBlogs(x.data)
      })
    ]).finally( () => {
      setLoading(false)
    })
    setLoading(true);
  },[])


  if(isLoading){
    return (
      <LoadingPage/>
    )
  } 
  return (
    <> 
      <Switch>
        <Route path={ADMIN}>
          <AdminPage blogs={blogs} messages={messages} team={team} pets={pets}/>
        </Route>
        <Route path={HOME}>
          <UserRouting blogs={blogs} team={team} pets={pets}/>
        </Route>
      </Switch>
    </>
  )
}

export default App;