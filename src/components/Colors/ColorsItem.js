import React from 'react' 
import "./ColorsItem.css"

export const ColorsItem = (props) => { 
  return ( 
      <> 
      {
          props.photos.map((item, i) => { 
              return (
                  <>    
                  <button style={{ backgroundColor: `${item.color}` }} key={i} name={item.url} color={item.color} value={item.color} onClick={props.onShow}   className='color-btn'></button>
                  </>
              )
          })
      }
      </>
  )
}
 