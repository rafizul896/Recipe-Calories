import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleClickToCook}) => {
    const [recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="col-span-3 flex flex-col md:grid grid-cols-2 gap-5">
            {
                recipes.map((recipe) => <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleClickToCook={handleClickToCook}
                    ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleClickToCook: PropTypes.func
}

export default Recipes;