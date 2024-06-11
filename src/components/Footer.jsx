import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
  <aside>
    <img className='w-20 h-16' src="img/favicon1.png" alt="" />
    <p className="font-bold">
      Arty-Finance
    </p> yarn add react-toastify
    <p className="font-bold">
      ArtyVisual Development Products<br/>Providing reliable tech!
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <img src="img/instagram.png" alt="" />  
    <img src="img/youtube.png" alt="" />  
    <img src="img/github.png" alt="" />  
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer