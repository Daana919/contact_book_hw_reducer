import React, { useContext, useEffect } from "react";
import { contactContext } from "../ContactContext";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const ContactCard = () => {
	const { contacts, getContacts, deleteContact } = useContext(contactContext);
	const navigate = useNavigate();

	useEffect(() => {
		getContacts();
	}, []);

	return (
		<>
			<center style={{ fontSize: "30px", margin: "20px" }}>Contacts</center>
			<div className='d-flex justify-content-between flex-wrap w-75 m-auto'>
				{contacts.map(item => (
					<Card style={{ width: "18rem" }}>
						<Card.Img variant='top' src={item.image} />
						<Card.Body>
							<Card.Title>Name:{item.name}</Card.Title>
							<Card.Title>Lastname:{item.lastName}</Card.Title>
							<Card.Text>Number:{item.number}</Card.Text>
							<Button variant='outline-danger' onClick={() => deleteContact(item.id)}>
								Delete
							</Button>
							<Button variant='outline-success' className='mx-1' onClick={() => navigate(`/edit/${item.id}`)}>
								Edit
							</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
};

export default ContactCard;
