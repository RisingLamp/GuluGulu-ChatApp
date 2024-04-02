import React from 'react'
import Sidebar from '../compnents/Sidebar'
import Chat from '../compnents/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div  className = "container">
      <Sidebar/>
      <Chat/>
     </div> 
   </div> 
  )
}

export default Home