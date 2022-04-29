import React from 'react';
import './page1.css'
import Sidebar from '../../components/sidebar/Sidebar';
import MainComp from '../../components/mainComp/MainComp' 
import Stack from '@mui/material/Stack';
import Navbar from '../../components/navbar/Navbar';
function Page1() {
  return (
    <div className='home'>
        <Navbar/>
        <Stack direction ="row" justifyContent="space-between" sx ={{marginTop:'5%'}}>
            <Sidebar />
            <MainComp />
        </Stack>
    </div>
      
     
  )
}

export default Page1