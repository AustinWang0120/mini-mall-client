import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/actions/cartActions";

const ProductDetail = ({ product }) => {
	const dispatch = useDispatch();
	const selector = useSelector(state => state.cart.items);

	const isInCart = selector.some(item => item.id === product.id);

	const handleCartAction = () => {
		if (isInCart) {
			dispatch(removeFromCart(product));
		} else {
			dispatch(addToCart(product));
		}
	};

	return (
		<div className="container mx-auto p-6">
			<div className="bg-white shadow-lg rounded-lg p-4">
				<img
					src={product.image}
					alt={product.title}
					className="w-full h-96 object-cover rounded-lg mb-4"
				/>
				<div>
					<h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
					<p className="text-gray-600 mt-2">{product.description}</p>
					<p className="text-gray-800 font-bold mt-2">${product.price}</p>
					<button
						className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
						onClick={handleCartAction}
					>
						{isInCart ? "Remove from Cart" : "Add to Cart"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
