import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navber from './components/Navber/Navber'
import Order from './components/Order/Order'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currCook,setCurrCook] = useState([])
  const [recipe, setRecipe] = useState([])
  const handleClickToCook = (orderRecipe) => {
    const newRecipe = recipe.find(item => item.recipe_id == orderRecipe.recipe_id)
    if (!newRecipe) {
      toast.success('Added...!')
      setRecipe([...recipe, orderRecipe])
    }
    else {
      toast.warn('Already Added..!')
    }
  }

  const handleClickToPreparing = (currentlyCookimg) => {
    const cookRecipe = recipe.filter(cook => cook.recipe_id !== currentlyCookimg.recipe_id)
    setRecipe([...cookRecipe])
    setCurrCook([...currCook,currentlyCookimg])
    toast.success('Preparing Success!', {
      position: "top-right",
      theme: "colored",
      });
  }

  return (
    <>
      <div>
        <Navber></Navber>
        <Banner></Banner>
        <div className='md:mt-20'>
          <h1 className='text-4xl font-bold text-[#150B2B] text-center'>Our Recipes</h1>
          <p className='text-center text-[#150B2B99] my-5'>Awareness of calorie intake assists in making informed dietary choices and achieving fitness goals. Balancing flavor <br className='hidden md:block'/> and  nutritional value ensures that recipes are both delicious and healthful.</p>
          <div className='flex flex-col-reverse lg:grid grid-cols-5 gap-6 mt-14'>
            <Recipes handleClickToCook={handleClickToCook} ></Recipes>
            <Order recipe={recipe} currCook={currCook} handleClickToPreparing={handleClickToPreparing}></Order>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
