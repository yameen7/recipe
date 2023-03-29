import { useState, useEffect } from "react"

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { DeleteRecipe, FetachAllRecipe } from "./ApiCalls";
import { Ingredience } from "./Ingredience";

import './css/card.css'
/* Renders the cards that holds recipe details */

export const ListRecipe = () => {

    const [Recipe, SetRecipe] = useState([]);
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
            DeleteRecipeById(id);
            Navigate("/");

        }
    }

    async function DeleteRecipeById(id) {
        await DeleteRecipe(id);
    }

    const GetRecipe = async () => {
        SetRecipe(await FetachAllRecipe());
    }

    useEffect(() => {
        GetRecipe();
    }, []);

    return (
        <div className="recipe-cards">
            {Recipe.map((RecipeObject) => {
                return (<div className="card" key={RecipeObject.id}>
                    <h3 className="recipe-name">{RecipeObject.name}</h3>
                    <hr />
                    <Ingredience Ingredence={RecipeObject.ingredience} id={RecipeObject.id} />
                    <hr />
                    <Link to={`/recipe/update/${RecipeObject.id}`}><button className="edit-btn">Edit</button></Link>
                    <button className="delete-btn" onClick={() => ConformDelete(RecipeObject.id)}>Delete</button>
                </div>)
            })}
        </div>
    )
}