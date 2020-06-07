import React from 'react'
import Logo from '../../assets/images/Start.jpg'

function Home(){
    return(
        <div
        style={{
          backgroundImage: 'url('+ Logo +')',
          width: '100%',
          height: '100vh',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          textAlign: 'center'
        }}
        >
          <h1 style={{color: 'white'}}>
            ¡Bienvenido a mi página!
          </h1>
        </div> 
    )
}

export default Home;