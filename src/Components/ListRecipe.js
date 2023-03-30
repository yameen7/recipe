import { useState, useEffect } from "react"


import { fetachAllRecipe } from "./ApiCalls";
import { AddEditRecipe } from "./AddEditRecipe";

import './card.css'
// import { EditIngredience } from "./EditIngredience";
import { RecipeCard } from "./Recipecard";
/* Renders the cards that holds recipe details */

export const ListRecipe = () => {

    const [recipe, setRecipe] = useState([]);
    
    const [r_id, setR_id] = useState();

    const getRecipe = async () => {
        setRecipe(await fetachAllRecipe());
    }

    useEffect(() => {
        getRecipe();
    }, []);

    return (
        <>
            <AddEditRecipe id={r_id} />
            <div className="recipe-cards">
                {(recipe.length>0)?
                recipe.map((recipeObject) => {
                    return <RecipeCard key={recipeObject.id} recipeObject={recipeObject} setR_id={setR_id}/>
                }):<h3>No Data Found</h3>}
            </div>
        </>
    )
}