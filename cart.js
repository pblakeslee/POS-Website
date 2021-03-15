(function () {
	// Start here
	let products = {
		lavendarMocha: {
			name: "Blended Lavender Mocha",
			price: 4.99,
		},
		brownSugar: {
			name: "Brown Sugar Maple Cinnamon Latte",
			price: 3.8,
		},
		coldBrew: {
			name: "Classic Cold Brew",
			price: 3.0,
		},
		saltedCaramel: {
			name: "Iced Salted Caramel Macchiato",
			price: 4.2,
		},
		dripCoffee: {
			name: "Drip Coffee",
			price: 2.7,
		},
		hotChocolate: {
			name: "Hot Chocolate",
			price: 3.29,
		},
		blondeVanilla: {
			name: "Blonde Vanilla Latte",
			price: 4.99,
		},
		darkChocolate: {
			name: "Dark Chocolate Mocha",
			price: 3.8,
		},
		bananaLoaf: {
			name: "Banana Nut Loaf",
			price: 1.99,
		},
		avocado: {
			name: "Avocado Toast",
			price: 4.49,
		},
	};

	let removeCartItemButtons = document.querySelectorAll(".remove");
	console.log(removeCartItemButtons);

	for (let i = 0; i < removeCartItemButtons.length; i++) {
		let button = removeCartItemButtons[i];
		button.addEventListener("click", function (event) {
			var buttonClicked = event.target;
			buttonClicked.parentElement.remove();
		});
	}

	// let container = document.getElementById("cartContainer");
	// let remove = document.querySelectorAll(".remove");

	// remove.addEventListener("click", (event) => {
	// 	for (let i = 0; i < container.children.length; i++) {
	// 		// let removed = container.children[i]
	// 		let buttonClicked = event.target;
	// 		buttonClicked.parentElement.remove();
	// 	}
	// });

	// End here
})();
