import React from 'react'
import CustomNavbar from './CustomNavbar'
import Announcement from './Announcement'
const MainHeader = () => {
  return (
    <div style={{position: "fixed",top: '0',  width: "100%", zIndex: '10'}}>
        <Announcement />
        <CustomNavbar />
    </div>
  )
}

export default MainHeader