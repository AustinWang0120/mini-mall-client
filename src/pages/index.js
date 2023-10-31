import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/products")
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<div>
			<Header />
			<div className="container mx-auto p-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
