import { FC, useEffect, useState } from "react"
import { RecipesProps } from "../../interfaces/interfaces"
import { Container } from "./styled"



const RecipesContainer:FC = ()=>{
    const [recipes, setRecipes] = useState<RecipesProps[]>([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes').then(res => res.json()).then(data=>{
            setRecipes(data.recipes)
        }).catch(e => alert(e.message))
    }, [])
    
    console.log(recipes)

    return(
        <Container>
            <h1>Receitas</h1>
            <div className="product-container">
                {recipes.map(recipe=>{
                    return(
                        <div key={recipe.id}>
                            <figure>
                                <img src={recipe.image} alt="User Image"/>
                                <figcaption>
                                    <b className="title">{recipe.name}</b><br/><br/>
                                    <div className="caption-content">
                                        <b>Calorias por porção: </b>{recipe.caloriesPerServing}<br/>
                                        <b>Tempo de cozimento: </b>{recipe.cookTimeMinutes} minutos<br/>
                                        <b>Tempo de preparação: </b>{recipe.prepTimeMinutes} minutos<br/>
                                        <b>Cozinha: </b>{recipe.cuisine}<br/>
                                        <b>Dificuldade: </b>{recipe.difficulty === 'Easy' ? 'Fácil' : 'Média'}<br/>
                                        <b>Ingredientes: </b>{recipe.ingredients}<br/>
                                        <b>Instruções: </b>{recipe.instructions}<br/>
                                        <b>Tipo de refeição: </b>{recipe.mealType}<br/>
                                        <b>Quantidade de pessoas: </b>{recipe.servings}<br/>
                                        <b>Tipo: </b>{recipe.tags}<br/>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default RecipesContainer