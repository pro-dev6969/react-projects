import React,{useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearch} = useGlobalContext()
  const searchValue = React.useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  const searchCocktail = () =>{
    setSearch(searchValue.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'> search your drink !</label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
