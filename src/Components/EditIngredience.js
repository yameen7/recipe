import { useForm } from "react-hook-form"
import { updateIngredience } from "./ApiCalls";

export const EditIngredience = ({ id,ingredenceItem ,cncl,r_id}) => {
    const { register, handleSubmit } = useForm();
    // setValue('ing',value)
    const onUpdate = async({ing}) => {
        let updatedIngredence = ingredenceItem;
        updatedIngredence[id] = ing;
        // console.log(updatedIngredence);
        await updateIngredience(r_id,updatedIngredence);
        cncl(null)
    }
    const cnancle = ()=>{
        cncl(null)
    }
    return (
        <div className="update-form">
            <form onSubmit={handleSubmit(onUpdate)}>
                <input type='text' defaultValue={ingredenceItem[id]} {...register('ing')} className="update-field"></input>
                <button className="update-array">&#10003;</button>
                <button className="cncl-btn" onClick={()=>cnancle()}>X</button>
            </form>
        </div>
    )
}