

import './App.css'
import Cookings from './components/Cookings/Cookings'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
     
      <Header></Header>
      <div className='md:grid grid-cols-5'>
      <Recipes></Recipes>
      <Cookings></Cookings>
      </div>

      
    </>
  )
}

export default App
