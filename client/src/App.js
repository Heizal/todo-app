import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import {useEffect, useState} from 'react'

const App = () => {
  const userEmail = 'heizal@test.com'

  // save json to the frontend
  const [tasks, setTasks] = useState(null)

  const getData = async () =>{
    try{
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)

    }catch(err){
      console.error(err)
    }
  }

  useEffect(() =>  getData, [])

  console.log(tasks)


  //sort tasks by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date)  - new Date(b.date))
  


  return (
    <div className='app'>
      {/* listName is a prop */}
      <ListHeader listName= {'🏝️  Holiday tick list'}/>
      {/* Map sorted tasks to ListItems*/}
      {sortedTasks?.map((task) => <ListItem  key={task.id} task={task} />)}
    </div>
  );
}

export default App;
