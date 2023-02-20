import React from "react";
import axios from "axios";

export const contactContext = React.createContext();

const INIT_STATE = {
	contacts: [],
	oneContact: null,
};

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case "GET_CONTACTS":
			return { ...state, contacts: action.payload };
		case "GET_ONE_CONTACT":
			return { ...state, oneContact: action.payload };
		default:
			return state;
	}
}

const ContactContextProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

	const API = "http://localhost:8000/contacts";

	async function getContacts() {
		let res = await axios(API);
		dispatch({
			type: "GET_CONTACTS",
			payload: res.data,
		});
	}

	async function addContact(newContact) {
		await axios.post(API, newContact);
		getContacts();
	}

	async function getOneContact(id) {
		let res = await axios(`${API}/${id}`);
		dispatch({
			type: "GET_ONE_CONTACT",
			payload: res.data,
		});
	}

	async function updateContact(id, editedContact) {
		await axios.patch(`${API}/${id}`, editedContact);
		getContacts();
	}

	async function deleteContact(id) {
		await axios.delete(`${API}/${id}`);
		getContacts();
	}
	return (
		<contactContext.Provider
			value={{
				addContact,
				getContacts,
				updateContact,
				getOneContact,
				deleteContact,
				contacts: state.contacts,
				oneContact: state.oneContact,
			}}
		>
			{children}
		</contactContext.Provider>
	);
};

export default ContactContextProvider;
