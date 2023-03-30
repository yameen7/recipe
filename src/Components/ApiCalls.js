import axios from "axios"

const url = 'http://localhost:5000/Recipe/'

export const fetachAllRecipe = async()=>{
    const {data} = await axios.get(url);
    return data;

}

export const addRecipe = async(name,IngredienceArry)=>{
    await axios.post(url,{name: name, ingredience:IngredienceArry});
}

export const getSingleRecipe = async(id)=>{
    const {data} = await axios.get(`${url}${id}`);
    return data;
}

export const updateleRecipe = async(id,name,IngredienceArry)=>{
    await axios.put(`${url}${id}`,{name:name, ingredience:IngredienceArry});
}

export const deleteRecipe = async(id)=>{
   await axios.delete(`${url}${id}`);
}

export const updateIngredience= async(id,IngredienceArry)=>{
    await axios.patch(`${url}${id}`,{ingredience:IngredienceArry});
}
