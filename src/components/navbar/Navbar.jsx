import React from 'react';
import './navbar.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <div className = "gradient"></div>
            <div className='text'>
                <div> Classroom </div>
                <div> Manager </div>
            </div>    
        </div>
        <div className = 'right'>
            <div className = "username"></div>
            <span class = "user">Kishore</span>
            <div className = 'icons'>
                <NotificationsNoneOutlinedIcon/>
                <HelpOutlineOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Navbar