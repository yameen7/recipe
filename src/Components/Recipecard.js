import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteRecipe } from "./ApiCalls";
import { EditIngredience } from "./EditIngredience";
import { Ingredience } from "./Ingredience";

export const RecipeCard = ({recipeObject,setR_id}) => {

    const [ingredienceId,setId] = useState();

    
    const Navigate = useNavigate();

    async function ConformDelete(id) {
        let Responce = await Swal.fire({
            title: 'Are you sure',
            text: 'Trainee will be deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        });
        if (Responce.isConfirmed) {
            deleteRecipeById(id);
            Navigate("/");

        }
    }
    async function deleteRecipeById(id) {
        await deleteRecipe(id);
    }
    
    return (<div className="card" key={recipeObject.id}>
        <h3 className="recipe-name">{recipeObject.name}</h3>
        <hr />
        <ul>
            {(recipeObject.ingredience).map((ingredenceItem, index) => {
                return ingredienceId === index ? <EditIngredience key={index} value={ingredenceItem} /> : <Ingredience key={index} fn={setId} Ingredence={ingredenceItem} index={index} id={recipeObject.id} />
            })}
        </ul>
        <hr />
        <button className="edit-btn" onClick={() => setR_id(recipeObject.id)}>Edit</button>
        <button className="delete-btn" onClick={() => ConformDelete(recipeObject.id)}>Delete</button>
    </div>)
}