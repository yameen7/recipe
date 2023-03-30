import { useNavigate } from "react-router-dom";

import { getSingleRecipe, updateIngredience } from "./ApiCalls";
/* Rnders the ingredience list of the particular recipe*/

export const Ingredience = ({ Ingredence, id,index,fn }) => {

    const Navigate = useNavigate();

    const deleteIngredience = async (id, index) => {
        let Recipe = await getSingleRecipe(id);
        const IngredienceArry = (Recipe.ingredience).filter((ele, ind) => ind !== index)
        console.log(IngredienceArry);
        await updateIngredience(id, IngredienceArry);
        Navigate('/')
    }

    return (
                <li>{Ingredence}
                    <button className="remove-btn" onClick={() => deleteIngredience(id, index)}>X</button>
                    <button className="edt-btn" onClick={()=>fn(index)}>Edit</button>
                </li>

    )
}