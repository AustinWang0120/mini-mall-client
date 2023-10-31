export const fetchCart = () => {
	return async dispatch => {
		const response = await fetch("http://localhost:3001/cart");
		const data = await response.json();

		dispatch({
			type: "SET_CART",
			payload: data,
		});
	};
};

export const addToCart = product => {
	return async dispatch => {
		const response = await fetch("http://localhost:3001/cart", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		});

		if (response.ok) {
			dispatch({
				type: "ADD_TO_CART",
				payload: product,
			});
		}
	};
};

export const removeFromCart = product => {
	return async dispatch => {
		const response = await fetch(`http://localhost:3001/cart/${product.id}`, {
			method: "DELETE",
		});

		if (response.ok) {
			dispatch({
				type: "REMOVE_FROM_CART",
				payload: product,
			});
		}
	};
};
