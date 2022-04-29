import { Box } from '@mui/material'
import React from 'react';
import Divider from '@mui/material/Divider';
import './mainComp.css';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import  CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
function MainComp() {
  return (
    <Box bgcolor = "white" flex = {4} p = {1}>
        <div className='buttons'>
            <div className = "permission">
                <NetworkWifiIcon/>
               <span>Permissions</span>
            </div>
            <div className="approval">
              <CalendarViewMonthIcon/>
              <span>Approval</span>
            </div>
            <div className = 'vertical'>

            </div>
            
        </div>
        <div className='line'>
            <Divider/>
        </div>
        
        
    </Box>
  )
}

export default MainComp