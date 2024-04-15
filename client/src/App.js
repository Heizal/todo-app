import ListHeader from './components/ListHeader'

const App = () => {
  return (
    <div className='app'>
      {/* listName is a prop */}
      <ListHeader listName= {'🏝️ Holiday tick list'}/>
    </div>
  );
}

export default App;
