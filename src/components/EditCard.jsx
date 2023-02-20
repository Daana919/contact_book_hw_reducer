import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../ContactContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditCard = () => {
	const { updateContact, getOneContact, oneContact } = useContext(contactContext);

	const navigate = useNavigate();
	const { id } = useParams();

	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [number, setNumber] = useState("");
	const [image, setImage] = useState("");

	useEffect(() => {
		getOneContact(id);
	}, []);

	useEffect(() => {
		if (oneContact) {
			setName(oneContact.name);
			setLastName(oneContact.lastName);
			setNumber(oneContact.number);
			setImage(oneContact.image);
		}
	}, [oneContact]);

	function saveChanges() {
		let editedContact = {
			name,
			number,
			image,
			lastName,
		};
		updateContact(id, editedContact);
		navigate("/");
	}

	return oneContact ? (
		<>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail' />

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control type='text' placeholder='Lastname' value={lastName} onChange={e => setLastName(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control type='number' placeholder='Number' value={number} onChange={e => setNumber(e.target.value)} />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Control type='text' placeholder='Image URL' value={image} onChange={e => setImage(e.target.value)} />
				</Form.Group>
				<Button variant='primary' onClick={saveChanges}>
					Edit Contact
				</Button>
			</Form>
		</>
	) : (
		<h2>Loading</h2>
	);
};

export default EditCard;
