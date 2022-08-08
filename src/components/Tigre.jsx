import React from 'react'
import './Card.css'
export default class Card extends React.Component{
    render(){
        return (
            <div className="card" >
                <div className="card-body">
                   
                    <img src='https://cdn.pixabay.com/photo/2017/01/11/19/50/tiger-1972731_960_720.jpg' width='600'height='500'/>
                    
                </div>
                <div className="card-content">
                  <h2>Tigre</h2>  
                  <h2>Carnívoro </h2> 
               






                  
                </div>
            </div>




        )

        
    }
}

