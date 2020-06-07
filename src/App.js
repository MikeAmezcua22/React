import React from 'react';
import Appbar from './components/Appbar';
import {Grid} from '@material-ui/core';
import Home from './components/Home'

function App() {
  return (
    <div>
      <Appbar />
      <Grid 
        container 
        lg={12}
        justify='center'
      >
        <Home />
        <Grid
          lg={6}
        >
          <div styles={styles.imageBackground} />
        
        </Grid>
        <Grid
        lg={6}
        >
          Este es el inicio de mi landig page
        </Grid>
      </Grid>
    </div>
  );
}

 const styles = {
   imageBackground:{
    backgroundImage: "url('https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/recetas-de-comida-cuarentena.jpg')",
    height: '500px',
    margin: '15px',
    backgroundSize: 'cover',
   }
 }

export default App;
