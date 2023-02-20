import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import EditCard from "./components/EditCard";
import ContactContextProvider from "./ContactContext";

const MainRouters = () => {
	return (
		<ContactContextProvider>
			<Routes>
				<Route path='/' element={<ContactCard />} />
				<Route path='/add' element={<AddContact />} />
				<Route path='/edit/:id' element={<EditCard />} />
			</Routes>
		</ContactContextProvider>
	);
};

export default MainRouters;
