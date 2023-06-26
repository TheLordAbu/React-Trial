import React from "react";
import coins from "./../imgs/coins.png";

export default function ProductCard({ addToCart, isInBasket, ...props }) {
	const cardStyle = isInBasket ? "product-card added" : "product-card";
	return (
		<figure className={cardStyle}>
			<div className="product-card__art">
				<img src={props.image} alt="" />
			</div>
			<div className="product-card__content">
				<h2>{props.title}</h2>
				<p>{props.description}</p>
				<div className="price">
					<img src={coins} alt="" />
					<span>{props.price} Gil</span>
				</div>
				<button className="addToCartbtn" onClick={addToCart}>
					Add to Basket
				</button>
			</div>
		</figure>
	);
}
