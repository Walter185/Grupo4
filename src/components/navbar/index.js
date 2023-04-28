import * as React from 'react';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    display:"flex",justifyContent:"space-between",
    marginLeft:10,
    marginRight:20,
  
  // top:0,
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 104,
    },
  }));
export default function Navbar() {
    return (
        <Box  className="d-flex p-2" styles={{ color:'grey',}}>
          <AppBar position="fixed"   color="inherit" style={{display:"inline-flex"}}>
            <StyledToolbar >
         <div style={{display:"flex",alignSelf:"right"}}>
          <Link to="/">
              <img src="pedidosya.png" alt="" className='pedidosya_name_logo'/>
            </Link>
               <Typography
              style={{fontSize:14,fontWeight:500,alignSelf:'center'}}
                noWrap
                component="div"
                sx={{ marginRight:5 }}
              >
                 <Link to ="/menu">
                Menu
              </Link>
              </Typography>
          
               
                <Typography
                    style={{fontSize:14,fontWeight:500,alignSelf:'center'}}
                    noWrap
                    component="div"
                    sx={{ marginRight:5 }}
              ><Link to ="/deals">
                    Deals
                  </Link>
              </Typography>
             
              
         </div>
         
           
             <div className='navbar_signin_icon' >
                 <IconButton size="large" aria-label="profile" color="inherit"  style={{fontSize:14,fontWeight:600,alignSelf:'center'}}>
                <Link to ="/login">
                {/* <Profile/> */}
                  </Link>
              </IconButton>
              
               <Typography
              style={{fontSize:16,fontWeight:1000,alignSelf:'center',width:"70px"}}
                noWrap
                component="div"
                sx={{ marginRight:2}}
              >
                 <Link to ="/login">
                  {/* {token?"Account":"sign In"}
                 */}
                 </Link>
              </Typography>
              
              
               <div className='navbar_cartdetail' ></div>
               <p className='navbar_amount' > $ </p>
               <Link to="/cartdetail" ><div className='navbar_cartcount'>count</div></Link>
             
             </div>
            </StyledToolbar>
                    
     
    
          </AppBar>
          
        </Box>
      );
    }