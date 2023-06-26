import React, { useState } from "react";
import gameHubLogo from "../../imgs/logo.png";
import ProductCard from "../ProductCard";
import Basket from "../basket/Basket";
import productData from "../../productData";

export default function Hero() {
	const [basketItems, setBasketItems] = useState([]);

	const addToBasket = (product) => {
		setBasketItems([...basketItems, product]);
	};
	const removeFromBasket = (product) => {
		const updatedBasketItems = basketItems.filter(
			(item) => item.id !== product.id
		);
		setBasketItems(updatedBasketItems);
	};

	const products = productData.map((product) => {
		const isInBasket = basketItems.some((item) => item.id === product.id);
		return (
			<ProductCard
				key={product.id}
				{...product}
				isInBasket={isInBasket}
				removeFromBasket={() => removeFromBasket(product)}
				addToCart={() => addToBasket(product)}
			/>
		);
	});

	return (
		<main>
			<div className="wrapper">
				<div className="hero-logo">
					<img src={gameHubLogo} alt="" />
				</div>
				<section className="products">{products}</section>
			</div>
			<Basket basketItems={basketItems} removeFromBasket={removeFromBasket} />
		</main>
	);
}
