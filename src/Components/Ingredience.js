import { useNavigate } from "react-router-dom";

import { GetSingleRecipe, UpdateIngredience } from "./ApiCalls";
/* Rnders the ingredience list of the particular recipe*/

export const Ingredience = ({ Ingredence, id }) => {

    const Navigate = useNavigate();

    const DeleteIngredience = async (id, index) => {
        let Recipe = await GetSingleRecipe(id);
        const IngredienceArry = (Recipe.ingredience).filter((ele, ind) => ind !== index)
        console.log(IngredienceArry);
        await UpdateIngredience(id, IngredienceArry);
        Navigate('/')
    }

    return (
        <ul>
            {Ingredence.map((items, index) => {
                return <li key={index}>{items}
                    <button className="remove-btn" onClick={() => DeleteIngredience(id, index)}>X</button>
                    <button className="edt-btn">Edit</button>
                </li>
            })}
        </ul>
    )
}