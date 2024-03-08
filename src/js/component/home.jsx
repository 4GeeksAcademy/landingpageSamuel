import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./Navbar"; 
import Jumbotron from "./Jumbotron";
import Card from "./Card.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<Jumbotron />
				<div className Card style={{ display: "flex" }}>
					<Card />
					<Card />
					<Card />
					<Card />

				</div>



		</div>
	);
};

export default Home;
