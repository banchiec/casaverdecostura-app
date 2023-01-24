<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./ShowCaseItem.css";
import { favoriteContext } from "../context/FavoritesContext";

export const ShowCaseItem = (props) => {
  const product = props;
  const images = props.photos?.map((photo) => photo.url);
  const [clickFavorities, setClickFavorities] = useState(false);
  const { addtoFavorites } = useContext(favoriteContext);

  return (
    <div className="cards_item">
      <div className="container_favorities">
        {clickFavorities ? (
          <MdFavorite fill="grey" />
        ) : (
          <MdFavoriteBorder onClick={() => addtoFavorites(product)} />
        )}
      </div>
      <div className="card">
        <div className="card_image">
          <Link to={`/details/${props._id}`}>
            <img
              className="card-img"
              alt="product"
              src={`http://localhost:5005/${images[0]}`}
            />
          </Link>
        </div>
        <div className="card_content">
          <h4 className="card_title">{props.name}</h4>
          <p className="card_price">{props.price} .00 EUR </p>
        </div>
      </div>
    </div>
  );
};
=======
import React, { useEffect, useState } from 'react'
import './ShowCaseItem.css'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const ShowCaseItem = (props) => {
	const images = props.photos?.map((photo) => photo.url)
	const [clickFavorities, setClickFavorities] = useState(false)

	useEffect(() => {
		clickFavorities ? addFavority() : removeFavority()
	}, [clickFavorities])

	const addFavority = () => {
		props?.user?.favorities.push(props?._id)
		console.log(props?.user.favorities)
	}

	const removeFavority = () => {
		let newFavorities = props?.user?.favorities.map((item) => item.id !== props?._id)
		props?.user?.favorities.pop(props?._id)
		console.log(newFavorities)
	}
	const handleFavority = () => {
		setClickFavorities(!clickFavorities)
	}
	return (
		<div className="cards_item">
			<div className="container_favorities" onClick={() => handleFavority()}>
				{clickFavorities ? <MdFavorite /> : <MdFavoriteBorder />}
			</div>
			<div className="card">
				<div className="card_image">
					<Link to={`/details/${props._id}`}>
						<img className="card-img" alt="product" src={images[0]} />
					</Link>
				</div>
				<div className="card_content">
					<h4 className="card_title">{props.name}</h4>
					<p className="card_price">{props.price} .00 EUR </p>
				</div>
			</div>
		</div>
	)
}
>>>>>>> preprodClean
