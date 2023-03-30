import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx"
import { Card } from "./card.jsx"

//create your first component
const Home = () => {
	return (
		<div class = "container">
			<Navbar/>
			<Jumbotron/>
			<Card/>
		</div>
	);
};

export default Home;
