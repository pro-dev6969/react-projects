import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter , FaGithubSquare , FaLinkedin , FaFacebook} from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLink,setShowLink] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
    
  useEffect(()=>{
    const linkHeight = linksRef.current.getBoundingClientRect().height
    
    if(showLink){
        linksContainerRef.current.style.height = `${linkHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showLink])
  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} />
        <button className='nav-toggle' onClick={()=>setShowLink(!showLink)}>
          <FaBars />
        </button>
      </div>

      
        <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
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
      

      <ul className='social-icons'>
        {social.map((item)=>{
          const {id,url,icon} = item
          return(
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
