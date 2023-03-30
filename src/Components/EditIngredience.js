import { useForm } from "react-hook-form"

export const EditIngredience = ({value}) => {
const {register,handleSubmit} = useForm();


const onUpdate = () =>{

}
    return (
        <div className="update-form">
            <form onSubmit={handleSubmit(onUpdate)}>
                <input type='text' defaultValue={value} {...register('ing')} className="update-field"></input>
                <input type='submit' className="update-ing-form" />
            </form>
            <button className="cncl-btn cancel" >Cancel</button>
        </div>
    )
}