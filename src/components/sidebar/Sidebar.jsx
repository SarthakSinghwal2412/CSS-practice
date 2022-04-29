import React from 'react';
import { Box } from '@mui/material';
import "./sidebar.css";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
function Sidebar() {
  return (
    <Box bgcolor = "#FCFBFF" flex = {.95} p= {2} sx={{
        height : "100%"
    }}>
            <div className='projects'>
                <DashboardOutlinedIcon/>
                <span>Projects</span>
            </div>
            <div className = "classroom">
                <BusinessCenterOutlinedIcon/>
                <span>Classrooms</span>
            </div>
            <div className ="permissions">
                <SecurityOutlinedIcon/>
                <span>Permissions</span>
            </div>

    </Box>
  )
}

export default Sidebar