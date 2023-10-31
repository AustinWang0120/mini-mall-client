import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

const ProductListPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/products")
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<div className="container mx-auto p-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductListPage;
