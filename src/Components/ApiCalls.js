import axios from "axios"

const url = 'http://localhost:5000/Recipe/'

export const FetachAllRecipe = async()=>{
    const {data} = await axios.get(url);
    return data;

}

export const AddRecipe = async(name,IngredienceArry)=>{
    await axios.post(url,{name: name, ingredience:IngredienceArry});
}

export const GetSingleRecipe = async(id)=>{
    const {data} = await axios.get(`${url}${id}`);
    return data;
}

export const UpdateleRecipe = async(id,name,IngredienceArry)=>{
    await axios.put(`${url}${id}`,{name:name, ingredience:IngredienceArry});
}

export const DeleteRecipe = async(id)=>{
   await axios.delete(`${url}${id}`);
}

export const UpdateIngredience= async(id,IngredienceArry)=>{
    await axios.patch(`${url}${id}`,{ingredience:IngredienceArry});
}
