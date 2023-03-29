import { Route, Routes, Navigate } from "react-router-dom"
import { AddEditRecipe } from "./AddEditRecipe"

export const RecipeRoutes = () => {
    return (
        <Routes>
            <Route path="/recipe/update/:id" element={<AddEditRecipe />}></Route>
            <Route path="/recipe" element={<AddEditRecipe />}></Route>
            <Route path="/" element={<Navigate replace to='/recipe' />}></Route>
        </Routes>
    )
}