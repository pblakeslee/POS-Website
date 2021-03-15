(function () {
	// Start here
	// let products = {
	// 	lavendarMocha: {
	// 		name: "Blended Lavender Mocha",
	// 		price: 4.99,
	// 	},
	// 	brownSugar: {
	// 		name: "Brown Sugar Maple Cinnamon Latte",
	// 		price: 3.8,
	// 	},
	// 	coldBrew: {
	// 		name: "Classic Cold Brew",
	// 		price: 3.0,
	// 	},
	// 	saltedCaramel: {
	// 		name: "Iced Salted Caramel Macchiato",
	// 		price: 4.2,
	// 	},
	// 	dripCoffee: {
	// 		name: "Drip Coffee",
	// 		price: 2.7,
	// 	},
	// 	hotChocolate: {
	// 		name: "Hot Chocolate",
	// 		price: 3.29,
	// 	},
	// 	blondeVanilla: {
	// 		name: "Blonde Vanilla Latte",
	// 		price: 4.99,
	// 	},
	// 	darkChocolate: {
	// 		name: "Dark Chocolate Mocha",
	// 		price: 3.8,
	// 	},
	// 	bananaLoaf: {
	// 		name: "Banana Nut Loaf",
	// 		price: 1.99,
	// 	},
	// 	avocado: {
	// 		name: "Avocado Toast",
	// 		price: 4.49,
	// 	},
	// };
	updateCartToal();

	// targeting all remove buttons
	let removeCartItemButtons = document.querySelectorAll(".remove");
	console.log(removeCartItemButtons);

	// looping through remove buttons and deleting the parent container when clicked
	for (let i = 0; i < removeCartItemButtons.length; i++) {
		let button = removeCartItemButtons[i];
		button.addEventListener("click", function (event) {
			var buttonClicked = event.target;
			buttonClicked.parentElement.remove();
			updateCartToal();
		});
	}

	//
	function updateCartToal() {
		let cartItemContainer = document.getElementsByClassName(
			"cartContainer"
		)[0];
		let cartItems = cartItemContainer.getElementsByClassName(
			"cartItem"
		);
		let total = 0;
		for (let i = 0; i < cartItems.length - 1; i++) {
			let cartItem = cartItems[i];
			let priceElement = cartItem.getElementsByClassName(
				"price"
			)[0];
			let quantityElement = cartItem.getElementsByClassName(
				"cartItemQuantity"
			)[0];
			var price = parseFloat(
				priceElement.innerText.replace("$", "")
			);
			var quantity = quantityElement.value;
			total = total + price * quantity;
			console.log(total);
		}
		let subtotal = document.querySelector(".totalPrice");
		subtotal.innerText = "$" + total;
		console.log(subtotal);
	}

	// End here
})();
