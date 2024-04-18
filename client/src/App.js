import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import Auth from './components/Auth'
import {useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  // Save authToken and email cookies
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  // save json to the frontend
  const [tasks, setTasks] = useState(null)

  // Authorisation

  const getData = async () =>{
    try{
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)

    }catch(err){
      console.error(err)
    }
  }
  
  useEffect(() =>  {
    if (authToken){
      getData()
    }

  }, [])

  console.log(tasks)


  //sort tasks by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date)  - new Date(b.date))
  


  return (
    <div className='app'>
      {/* If not authenticated -> show auth component */}
      {!authToken && <Auth/>}
      {/* If user is authorised, see the app content */}    
      {authToken &&
        <>
          {/* listName is a prop */}
          <ListHeader listName= {'🏝️  Holiday tick list'} getData={getData}/>
          <p className='user-email'>Welcome back {userEmail}</p>
          {/* Map sorted tasks to ListItems*/}
          {sortedTasks?.map((task) => <ListItem  key={task.id} task={task} getData={getData} />)}
        </>}
      <p className='copyright'>Have fun 😉</p>
    </div>
  );
}

export default App;
