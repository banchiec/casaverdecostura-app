import React from "react"
import "./ShowCaseItem.css"  

export const ShowCaseItem = (props) => {    
  // const [sidebar, setSidebar] = useState(false) 
  // const showSidebar = () => setSidebar(!sidebar);  
  console.log(props);
  const images = props.photos?.map((itemall) => (itemall.url))   
  console.log(images);
     return( 
         <>                         
          <div className="cards_item">
            <div className="card">
              <div className="card_image">
                <img className="card-img" alt='product' src={images[0]}/>
              </div>
              <div className="card_content">
                <h4 className="card_title">{props.name}</h4> 
                <p className="card_price">{props.price} .00 EUR </p>
              </div>
            </div>
          </div>
         </>
     )
}