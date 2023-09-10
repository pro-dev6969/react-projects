import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  const [cocktails,setCocktails] = useState([])
  const [loading,setLoading] = useState(false)
  const [search,setSearch] = useState('a')

const fetchData = useCallback(async () =>{
    setLoading(true)
    try {
      const res = await fetch(`${url}${search}`)
      const db = await res.json()
      const {drinks} = db
      if(drinks){
        const newDrinks = drinks.map((item) => {
          const {
             idDrink,
             strDrink,
             strDrinkThumb,
             strAlcoholic,
             strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        console.log(newDrinks);
        setCocktails(newDrinks)
      }else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
},[search])
useEffect(()=>{
  fetchData()
},[search,fetchData])

  return <AppContext.Provider value={{
    cocktails,loading,search,setSearch}
  }>{children}</AppContext.Provider>
}
// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
