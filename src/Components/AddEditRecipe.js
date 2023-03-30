import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import { addRecipe, getSingleRecipe, updateleRecipe } from "./ApiCalls";

import './form.css'
/* Display The List of recipes with the form*/

export const AddEditRecipe = ({id}) => {
    
    const { register, handleSubmit, setValue } = useForm();
    
    const getRecipe = async () => {
        const data = await getSingleRecipe(id);
        setValue('name', data.name);
        const ingredienceString = (data.ingredience).join(',');
        setValue('ingredience', ingredienceString);
    }
    
    if (id) {
        getRecipe();
    }
    
    const Navigate = useNavigate();
    
    const AddUpdateRecipe = async (data) => {
        let ingredienceArry = (data.ingredience).split(",");
        // console.log(IngredienceArry);
        if (id) {
            await updateleRecipe(id, data.name, ingredienceArry)
        }
        else {
            await addRecipe(data.name, ingredienceArry);
        }
        Navigate('/');
    }
    
    return (
        <>
            <div className="recipe-form">
                <form className="add-form" onSubmit={handleSubmit(AddUpdateRecipe)}>
                    <input className="form-input" type={'text'} placeholder='Recipe Name' {...register('name', { required: true })} /><br/>
                    <input className="form-input" type={'text'} placeholder='Recipe Ingrediences' {...register('ingredience', { required: true })} /><br/>
                    <input type={'submit'} className='add-btn' />
                </form>
            </div>
        </>
    )
}