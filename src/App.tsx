import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME,ADMIN } from './route/Routes';
import { getPets } from './axios/pets';
import AdminPage from './components/adminPage/adminPage';
import UserRouting from './userRouting';
import LoadingPage from './components/loadingPage/loadingPage';
import { getUsers } from './axios/users';
import { getMessages } from './axios/messages';
import { getBlogs } from './axios/blogs';
import BlogData from './fakeData/blogsData.json';
import PetsData from './fakeData/petsData.json';
import MessagesData from './fakeData/messagesData.json';
import TeamData from './fakeData/teamData.json';
import './App.css';





function App() {

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
    if( messages.length === 0 || blogs.length === 0 || team.length === 0 || pets.length === 0){
      setBlogs(BlogData.blogs);
      setMessages(MessagesData.messages);
      setPets(PetsData.pets);
      setTeam(TeamData.members);

    }
    setLoading(true);
  },[messages.length, blogs.length, team.length, pets.length])


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