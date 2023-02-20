import React, { useContext, useState } from "react";
import { contactContext } from "../ContactContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
	const { addContact } = useContext(contactContext);
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [number, setNumber] = useState("");
	const [image, setImage] = useState("");

	function createContact() {
		let newContact = {
			name,
			number,
			image,
			lastName,
		};

		for (let key in newContact) {
			if (!newContact[key]) {
				alert("Some inputs are empty!");
			}
		}

		// console.log(newContact);
		addContact(newContact);
		navigate("/");
	}

	return (
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
				<Button variant='primary' onClick={createContact}>
					Create Contact
				</Button>
			</Form>
		</>
	);
};

export default AddContact;
