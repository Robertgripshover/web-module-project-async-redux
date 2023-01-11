import React from 'react'
import Gif from './Gif'

const GifList = props => {

    const { gifs } = props

    return (
        <div id='gifList'>
         {
            gifs.map(gif => {
                return(<Gif gif={gif}/>)
            })
         }
        </div>
    )

}

export default GifList