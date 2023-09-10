import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialItems = {
  loading:false,
  cart:cartItems,
  amount:0,
  total:0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialItems)

  const clearCart = ()=>{
    dispatch({type:'clear-cart'})
  }
  const remove = (id)=>{
    dispatch({type:'remove',payload:id})
  }
  const increase =(id)=>{
    dispatch({type:'increase',payload:id})
  }
  const decrease =(id)=>{
    dispatch({type:'decrease',payload:id})
  }
  const fetchData = async () => {
    dispatch({type:'loading'})

    const res = await fetch(url)
    const cart = await res.json()

    dispatch({type:'display',payload:cart})
    //payload mai data jara hai cart ka
  }

  //flow zaruri hai , to , fetch ka useeffect upar rkhna better h
  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    dispatch({type:'get-total'})
  },state.cart)

  
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
