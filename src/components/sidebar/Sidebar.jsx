import React from 'react';
import { Box } from '@mui/material';
import "./sidebar.css";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
function Sidebar() {
  
  return (
    <div className='sidebar'>
            <button className  = "parent">
              <div className='listItem'>
                  <DashboardOutlinedIcon/>
                  <span>Projects</span>
              </div>
            </button>
            <button className = "parent">
              <div className = "listItem">
                  <BusinessCenterOutlinedIcon/>
                  <span>Classrooms</span>
              </div>
            </button>
            <button className = "parent">
              <div className ="listItem">
                  <SecurityOutlinedIcon/>
                  <span>Permissions</span>
              </div>
            </button>

    </div>
  )
}

export default Sidebar