import React from 'react'
import { links, social } from './data'

const Sidebar = () =>{
    return (
        <div className='links-container show-container'>
        <ul className='links'>
        {links.map((link)=>{
            const {id,url,text} = link
            return(
              <li className='list' key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
}
export default Sidebar