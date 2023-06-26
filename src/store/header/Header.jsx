import React from "react";
import phoneIcon from "../../imgs/telephone.png";
import flagIcon from "../../imgs/flag.png";

const Header = () => {
	return (
		<header>
			<ul className="wrapper">
				<HeaderList iconName={phoneIcon} text="1337 1337 1337" />
				<HeaderList iconName={flagIcon} text="Try another Castle" />
			</ul>
		</header>
	);
};

export const HeaderList = (props) => {
	return (
		<li className="headerList">
			<img src={props.iconName} alt={props.iconName} />
			<p className="headerText">{props.text}</p>
		</li>
	);
};

export default Header;
