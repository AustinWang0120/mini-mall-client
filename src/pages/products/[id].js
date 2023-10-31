import React, { useEffect, useState } from "react";
import ProductDetail from "@/components/ProductDetail";

const ProductDetailPage = ({ id }) => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3001/products/${id}`)
			.then(response => response.json())
			.then(data => setProduct(data));
	}, [id]);

	return <div>{product && <ProductDetail product={product} />}</div>;
};

ProductDetailPage.getInitialProps = async context => {
	return {
		id: context.query.id,
	};
};

export default ProductDetailPage;
