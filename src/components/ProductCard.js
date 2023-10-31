import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/actions/cartActions";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cart.items);

	const isInCart = cartItems.some(item => item.id === product.id);

	const handleCardAction = () => {
		if (isInCart) {
			dispatch(removeFromCart(product));
		} else {
			dispatch(addToCart(product));
		}
	};

	return (
		<div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
			<Link href={`/products/${product.id}`}>
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-64 object-cover rounded-t-lg mb-4"
				/>
				<div>
					<h3 className="text-lg font-semibold text-gray-800">
						{product.title}
					</h3>
					<p className="text-gray-600 font-bold">${product.price}</p>
					<p className="text-gray-600 text-sm mt-2">{product.description}</p>
				</div>
			</Link>
			<button
				className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
				onClick={handleCardAction}
			>
				{isInCart ? "Remove from Cart" : "Add to Cart"}
			</button>
		</div>
	);
};

export default ProductCard;
