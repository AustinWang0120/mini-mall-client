import React from "react";

const CheckoutForm = () => {
	const handleSubmit = e => {
		e.preventDefault();
		alert("Order confirmed!");
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10">
			<div className="mb-6">
				<label
					htmlFor="address"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Shipping address
				</label>
				<input
					type="text"
					id="address"
					name="address"
					required
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md bg-gray-100"
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="payment"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Payment Information
				</label>
				<input
					type="text"
					id="payment"
					name="payment"
					required
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-gray-300 rounded-md bg-gray-100"
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
			>
				Confirm Order
			</button>
		</form>
	);
};

export default CheckoutForm;
