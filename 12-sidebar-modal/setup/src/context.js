import React, { useState, useContext } from 'react'

// Yaha Global Context create hojayega
const AppContext = React.createContext()

const AppProvider = ({children}) =>{

    const [isOpenSidebar,setIsOpenSidebar] = useState(false)
    const [isOpenModal,setIsOpenModal] = useState(false)
    
    const openSidebar = ()=>{
        setIsOpenSidebar(true)
    }
    const closeSidebar = ()=>{
        setIsOpenSidebar(false)
    }
    const openModal = ()=>{
        setIsOpenModal(true)
    }
    const closeModal = ()=>{
        setIsOpenModal(false)
    }
    return <AppContext.Provider value={{
        isOpenModal,
        isOpenSidebar,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
    }}>{children}</AppContext.Provider>
}

//custom global Hook : name must start with 'use'
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export{AppContext , AppProvider}
