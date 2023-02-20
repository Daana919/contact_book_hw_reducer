import React from "react";
import Header from "./components/Header";
import ContactContextProvider from "./ContactContext";
import MainRouters from "./MainRouters";

const App = () => {
	return (
		<>
			<ContactContextProvider>
				<Header />
				<MainRouters />
			</ContactContextProvider>
		</>
	);
};

export default App;
