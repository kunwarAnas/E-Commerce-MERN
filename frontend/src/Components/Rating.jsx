import React from 'react'

const Rating = ({value , text ,color}) => {
  
  return (
    <div>
        <span style={{color}}><i class={value>1?'fas fa-star':value>=0.5?'fas fa-star-half-alt':'far fa-star'}></i></span>
        <span style={{color}}><i class={value>2?'fas fa-star':value>=1.5?'fas fa-star-half-alt':'far fa-star'}></i></span>
        <span style={{color}}><i class={value>3?'fas fa-star':value>=2.5?'fas fa-star-half-alt':'far fa-star'}></i></span>
        <span style={{color}}><i class={value>4?'fas fa-star':value>=3.5?'fas fa-star-half-alt':'far fa-star'}></i></span>
        <span style={{color}}><i class={value>5?'fas fa-star':value>=4.5?'fas fa-star-half-alt':'far fa-star'}></i></span>
        <span style={{color}}>{text && +text+' reviews'}</span>
    </div>
  )
}

Rating.defaultProps = {
    color: '',
}

export default Rating