import React from 'react'
import Card from './Card'
import './CardList.css'
import { DUMMY_DATA } from '../data'


function CardList() {

  return (
    <>
    {DUMMY_DATA.map(movies => {
        return (
            <div className='wrapper'>
            <Card title={movies.title} image={movies.image} genre ={movies.genre} year={movies.year} />
            </div>
        )
       
    })
   
    }
    </>
  )
}

export default CardList