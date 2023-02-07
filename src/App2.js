/*import './App.css';
import React from 'react';
function App2(){
    return(
    <h1>Hello2</h1>)
}

export default App2;*/
import { Box } from '@mui/material';
import './App.css';

function App2() {
 // alert('Hiii');
  return (
    <div style = {{
      display : "flex",
      justifyContent : "center",
      marginTop : '30px',
      alignItems : "center"
      
    }}>
      <Box color="black"
      bgcolor = "pink" p={5}>
      Hi there!!
      </Box>
    </div>
    

    
  )
}
//setInterval(App2,5000);

export default App2;
