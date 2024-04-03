import React from 'react'


const Navbar = () => {
 

  return (
    <div className='navbar'>
      <span className="logo">Gulu Gulu</span>
      <div className="user">
        <img src="https://i.pinimg.com/originals/f5/bd/30/f5bd3018d23bbb50760b598ac4518fe2.jpg" alt="Rising" />
        <span>Rising</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar