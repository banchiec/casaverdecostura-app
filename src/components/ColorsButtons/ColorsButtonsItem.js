import React from 'react'

export const ColorsButtonsItem = (props) => { 
    console.log(props) 
    
    let images = props.colors?.map(item => item.url); 
    console.log(images);

  return (
    <div>ColorsButtonsItem</div>
  )
}
