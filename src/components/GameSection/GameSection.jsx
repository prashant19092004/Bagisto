import React from 'react'
import '../style.css';

const GameSection = (props) => {


  return (
    <div className='game-section d-flex flex-column gap-5 align-items-center justify-content-center'>
        <div className='game-section-title'>
            <h1 className=''>The game with our new additions!</h1>
        </div>
        <div className='game-section-pic d-flex justify-content-center gap-4 flex-wrap'>
            {
                props.data.map((item) => {
                    return (
                        <div className='game-section-card' style={{minWidth : props.column == 2 ? '36%' : '50%'}}>
                            <img src={item.image} alt='' />
                            <h3 style={{fontSize : props.column == 2 ? '2rem' : '3rem'}}>{item.title}</h3>
                        </div>            
                    )
                })
            }
        </div>
    </div>
  )
}

export default GameSection