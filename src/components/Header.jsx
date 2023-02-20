import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<Navbar bg='light' variant='light'>
			<Container>
				<Navbar.Brand onClick={() => navigate("/")}>Navbar</Navbar.Brand>

				<Link to='/add'>
					<Button variant='outline-success' onClick={() => navigate("/add")}>
						Create Contact
					</Button>
				</Link>
			</Container>
		</Navbar>
	);
};

export default Header;
