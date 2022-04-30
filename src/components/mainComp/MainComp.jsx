import Button from '@mui/material/Button';
import React from 'react';
import Divider from '@mui/material/Divider';
import './mainComp.css';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import  CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
// import Table from '../table/Table';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
function MainComp() {
  return (
    <div className='mainComp'>
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
        <div class = "upperBtn">
          <Button variant ="contained" startIcon={<AddIcon/>} sx={{
              backgroundColor : "#B73A3A",
              marginTop:'1.5rem'
              
          }}>
            Add Role
          </Button>
          <div className = "smallIcons">
            <EditOutlinedIcon sx ={{color:'gray'}}/>
            <DeleteOutlinedIcon  sx ={{color:'gray'}}/>
          </div>
        </div>

        {/* <div className='table'>
          <Table/>
        </div> */}
       
        
        
    </div>
  )
}

export default MainComp