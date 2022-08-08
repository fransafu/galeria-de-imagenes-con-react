import React from 'react'
import './Card.css'
export default class Card extends React.Component{
    render(){
        return (
            <div className="card" >
                <div className="card-body">
                   
                    <img src='https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_960_720.jpg'  width='600'height='500'/>

                </div>
                <div className="card-content">
                  <h2>Bebé Elefante</h2>  
                  <h2>Abrevadero</h2>  






                  
                </div>
            </div>




        )

        
    }
}