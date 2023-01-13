import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true)
  const [cocktail, setCocktail] = useState(null)
  const { id } = useParams()

  const dataFetch = async () => {
    setLoading(true)
    try {
      const resp = await fetch(`${url}${id}`)
      const data = await resp.json()
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]

        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }

        setCocktail(newCocktail)
      } else {
        setCocktail(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {
    dataFetch()
  }, [id])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const { name, image, info, glass, category, instructions, ingredients } =
      cocktail

    return (
      <section className='section cocktail-section'>
        <Link className='btn btn-primary' to='/'>
          back home
        </Link>
        <h2 className='section-title'>{cocktail.name}</h2>
        <div className='drink'>
          <img src={image} alt={name} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return <span key={index}> {item}</span>
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
