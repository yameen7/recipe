import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";

import { AddRecipe, GetSingleRecipe, UpdateleRecipe } from "./ApiCalls";
import { ListRecipe } from "./ListRecipe";

import './css/form.css'
/* Display The List of recipes with the form*/

export const AddEditRecipe = () => {

    const { id } = useParams();
    const { register, handleSubmit, setValue } = useForm();

    const GetRecipe = async () => {
        const data = await GetSingleRecipe(id);
        setValue('name', data.name);
        const IngredienceString = (data.ingredience).join(',');
        setValue('ingredience', IngredienceString);
    }

    if (id) {
        GetRecipe();
    }

    const Navigate = useNavigate();

    const AddUpdateRecipe = async (data) => {
        let IngredienceArry = (data.ingredience).split(",");
        // console.log(IngredienceArry);
        if (id) {
            await UpdateleRecipe(id, data.name, IngredienceArry)
        }
        else {
            await AddRecipe(data.name, IngredienceArry);
        }
        Navigate('/');
    }

    return (
        <>
            <div className="recipe-form">
                <form onSubmit={handleSubmit(AddUpdateRecipe)}>
                    <input className="form-input" type={'text'} placeholder='Recipe Name' {...register('name', { required: true })} /><br />
                    <input className="form-input" type={'text'} placeholder='Recipe Ingrediences' {...register('ingredience', { required: true })} /><br />
                    <input type={'submit'} className='add-btn' />
                </form>
            </div>
            <ListRecipe />
        </>
    )
}