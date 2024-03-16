import PropTypes from 'prop-types';
import { RxClock } from "react-icons/rx";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe,handleClickToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div className="card border-2 rounded-2xl p-5 space-y-3 md:space-y-4">
            <img className='rounded-2xl' src={recipe_image} alt="" />
            <h2 className="text-xl font-semibold text-[#282828]">{recipe_name}</h2>
            <p className='text-[#878787] fireSans'>{short_description}</p>
            <div className="border border-[#28282814]"></div>
            <div>
                <h3 className='text-lg text-[#282828]'>Ingredients: {ingredients.length}</h3>
                <div className='pl-4 text-[#878787] fireSans mt-2'>
                    {
                        ingredients.map((item,idx) => <li key={idx}>{item}</li>)
                    }
                </div>
            </div>
            <div className="border border-[#28282814]"></div>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-2 fireSans'>
                    <RxClock />
                    <p>{preparing_time} minutes</p>
                </div>
                <div className='flex items-center gap-2 fireSans'>
                    <AiOutlineFire />
                    <p>{calories} calories</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleClickToCook(recipe)} className="py-3 px-5 bg-[#0BE58A] text-black border-0 rounded-full">Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleClickToCook: PropTypes.func
}

export default Recipe;