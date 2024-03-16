import './App.css'
import Banner from './components/Banner/Banner'
import Navber from './components/Navber/Navber'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <div>
        <Navber></Navber>
        <Banner></Banner>
        <div className='flex flex-row-reverse lg:grid grid-cols-5'>
          <Recipes></Recipes>
        </div>
      </div>
    </>
  )
}

export default App
