import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import { fetchCart } from "@/store/actions/cartActions";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		store.dispatch(fetchCart());
	}, []);

	return (
		<Provider store={store}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
};

export default App;
