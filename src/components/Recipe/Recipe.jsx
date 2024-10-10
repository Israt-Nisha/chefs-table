
import PropTypes from 'prop-types';

const Recipe = ( {recipe} ) => {
    const {recipe_name, recipe_image, short_description,ingredients, preparing_time, calories} = recipe;
    return (
        <div className='p-6 border-2 border-gray-200 rounded-2xl'>
            <img className='rounded-lg' src={recipe_image} alt="" />
            <h2 className='text-xl font-semibold my-4'>{recipe_name}</h2>
            <h3 className='text-lg text-gray-600'>{short_description}</h3>

            <h3 className='text-xl font-medium my-4'>Ingredients: {ingredients.length}</h3>
           
            
                {
                    ingredients.map((ingredient, idx) =><li key={idx} className='text-gray-600'> {ingredient}</li> )
                }
                
                
             <div className='space-x-6 mt-8'>
                <span>{preparing_time} min</span>
                <span>{calories}</span>
            </div>  
            <button className='btn bg-green-500 py-2 px-4 rounded-3xl my-4'>Want to Cook</button> 
            
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;