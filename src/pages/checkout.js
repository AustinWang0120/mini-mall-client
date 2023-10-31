import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "@/components/CheckoutForm";
import CartItem from "@/components/CartItem";

const CheckoutPage = () => {
	const cartItems = useSelector(state => state.cart.items);
	const total = cartItems.reduce((acc, item) => acc + item.price, 0);

	return (
		<div>
			<div className="container mx-auto p-6 flex flex-col justify-center items-center">
				{cartItems.map(item => (
					<CartItem key={item.id} item={item} readonly />
				))}
			</div>
			<div className="text-center font-bold text-xl mb-2">Total: ${total}</div>
			<CheckoutForm />
		</div>
	);
};

export default CheckoutPage;
