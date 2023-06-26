import React from "react";
import bin from "../../imgs/bin.png";
import coins from "../../imgs/coins.png";

export default function Basket({ basketItems, removeFromBasket }) {
	const continueHandlerStyle =
		basketItems.length === 0 ? "continue-btn null" : "continue-btn active";

	const calculateTotalHandler = () => {
		let total = 0;
		basketItems.forEach((item) => {
			total += item.price;
		});
		return total;
	};

	if (basketItems.length === 0) {
		return (
			<div className="basket">
				<h2>Basket</h2>
				<div className="basket-container">
					<p className="no-items">No items</p>
					<button className={continueHandlerStyle}>Continue</button>
				</div>
			</div>
		);
	}

	return (
		<div className="basket">
			<h2>Basket</h2>
			<div className="basket-container">
				<ul className="basket-list">
					{basketItems.map((product, index) => (
						<Item
							key={index}
							product={product}
							removeFromBasket={removeFromBasket}
						/>
					))}
				</ul>
				<div className="total-container">
					<div>
						<h3>Total</h3>
						<span>{calculateTotalHandler()} Gil</span>
					</div>
					<button className={continueHandlerStyle}>Continue</button>
				</div>
			</div>
		</div>
	);
}

// BasketItem component
function Item({ product, removeFromBasket }) {
	const handleRemoveItem = () => {
		removeFromBasket(product);
	};
	return (
		<li className="basketItem">
			<img src={product.image} alt="game" />
			<div className="content">
				<h3>{product.title}</h3>
				<div className="price">
					<img src={coins} alt="" />
					<span>{product.price} Gil</span>
				</div>
			</div>
			<a href="#" onClick={handleRemoveItem}>
				<img src={bin} alt="" />
			</a>
		</li>
	);
}
