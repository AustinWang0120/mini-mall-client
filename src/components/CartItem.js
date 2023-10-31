import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/actions/cartActions";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeFromCart(item));
	};

	return (
		<tr className="bg-white border-b">
			<td className="px-6 py-4 whitespace-nowrap text-center">
				<img
					src={item.image}
					alt={item.title}
					className="h-10 w-10 rounded-full mx-auto"
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-center">{item.title}</td>
			<td className="px-6 py-4 whitespace-nowrap text-center">${item.price}</td>
			<td className="px-6 py-4 whitespace-nowrap text-center">
				<button
					className="text-red-500 hover:text-red-700 transition duration-300"
					onClick={handleRemove}
				>
					Remove
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
