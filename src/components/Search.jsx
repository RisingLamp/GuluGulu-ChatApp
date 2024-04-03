import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm" >
        <input type="text" placeholder="Search For A User" />
        </div>
        <div className ="userChat">
        <img src="https://i.pinimg.com/originals/16/73/49/167349fb497f247d4530aae296e8fbbe.jpg" alt="kaori"></img>
        <div className ="userChatInfo">
          <span>Karoi</span>
        </div>
      </div>
    </div>
  )
}

export default Search