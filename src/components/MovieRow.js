/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './MovieRow.css';

export default ({title, items}) => {
     const [scrollX, setScrollX] = useState(0)

     const handleLeftArrow = () => {
            let x = scrollX + Math.round(window.innerWidth / 2);
            if(x > 0 ) {
                x = 0
            }
            setScrollX(x)
     }

     const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
     }

    return(
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movierow--left' onClick={handleLeftArrow}>
             <img src='https://img.icons8.com/external-those-icons-lineal-color-those-icons/512/external-arrows-arrows-those-icons-lineal-color-those-icons-1.png'></img>
             </div>
            
             <div className='movieRow--right' onClick={handleRightArrow}>
             <img src='https://img.icons8.com/external-those-icons-lineal-color-those-icons/512/external-arrows-arrows-those-icons-lineal-color-those-icons.png'></img>
             </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                {items.results.length > 0 && items.results.map((item, key) =>(
                  <div key={key} className='movieRow--item'>
                     <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                  </div>
                ))}
                </div>
            </div>
        </div>
    )
}