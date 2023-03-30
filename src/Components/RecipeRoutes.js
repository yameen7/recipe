import { Route, Routes,Navigate } from "react-router-dom"
import { ListRecipe } from "./ListRecipe"

export const RecipeRoutes = ()=>{
    return(
        <Routes>
            <Route path="/recipe" element={<ListRecipe />}></Route>
            <Route path="/" element={<Navigate replace to='/recipe' />}></Route> 
        </Routes>
    )
}