import React from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/Star_Wars_logo.png"
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<nav className="navbar navbar-bd m-3 d-flex justify-content-center">
					<div className="col-sm-12 col-md-10 col-lg-8">
						<Link to="/">
							<img className="sw-logo" src={StarWarsLogo}></img>
						</Link>
						<div className="ml-auto">
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};
