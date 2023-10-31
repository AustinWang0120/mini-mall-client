import React from "react";
import { useRouter } from "next/router";

const CheckoutInfo = ({ total }) => {
	const router = useRouter();

	const handleCheckout = () => {
		router.push("/checkout");
	};

	return (
		<div className="text-right mt-4">
			<div className="font-bold text-xl mb-2">Total: ${total}</div>
			<button
				onClick={handleCheckout}
				className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition duration-300"
			>
				Checkout
			</button>
		</div>
	);
};

export default CheckoutInfo;
