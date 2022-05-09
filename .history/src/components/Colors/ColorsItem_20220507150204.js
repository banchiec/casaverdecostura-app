import React from 'react' 
import "./ColorsItem.css"

export const ColorsItem = (props) => { 
    console.log(props)
  return ( 
      <> 
      {
          props.photos.map((item, i) => { 
              return (
                  <>    
                  <button style={{ backgroundColor: `${item.color}` }} key={i} name={item.url} onClick={props.onShow}   className='color-btn'></button>
                  </>
              )
          })
      }
      </>
  )
}
 