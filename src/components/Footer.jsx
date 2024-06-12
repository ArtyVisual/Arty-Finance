import React from 'react'
import fav from './img/favicon1.png'
import insta from './img/instagram.png'
import yout from './img/youtube.png'
import git from './img/github.png'

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
  <aside>
    <img className='w-20 h-16' src={fav} alt="" />
    <p className="font-bold">
      Arty-Finance
    </p>
    <p className="font-bold">
      ArtyVisual Development Products<br/>Providing reliable tech!
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <img src={insta} alt="" />  
    <img src={yout} alt="" />  
    <img src={git} alt="" />  
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer