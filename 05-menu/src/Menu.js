import React from 'react'

const Menu = ({ data }) => {
  // console.log(props.data)
  
  return (
    <div className='section-center'>
      {data.map((menu) => {
        const{id,title,img,price,desc} = menu
        return (
          <article className='menu-item' key={id}>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>
                {desc}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
