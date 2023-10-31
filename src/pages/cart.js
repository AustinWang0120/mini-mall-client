import React from "react";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import CheckoutInfo from "@/components/CheckoutInfo";

const ShoppingCartPage = () => {
	const cartItems = useSelector(state => state.cart.items);
	const total = cartItems.reduce((acc, item) => acc + item.price, 0);

	return (
		<div className="container mx-auto p-6">
			<table className="min-w-full bg-white">
				<thead>
					<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
						<th className="py-3 px-6">Product</th>
						<th className="py-3 px-6">Name</th>
						<th className="py-3 px-6">Price</th>
						<th className="py-3 px-6">Action</th>
					</tr>
				</thead>

				<tbody>
					{cartItems.map(item => (
						<CartItem key={item.id} item={item} />
					))}
				</tbody>
			</table>

			<CheckoutInfo total={total} />
		</div>
	);
};

export default ShoppingCartPage;
