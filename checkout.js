(function () {
	// Start here

	//Get Cart
	let cart = localStorage.getItem("cart");
	cart = JSON.parse(cart);

	//If cart is empty create array
	if (cart === null) {
		cart = [];
	}

	//Items Container
	let cartItmes = document.getElementById("itemsInCart");

	//Loop thru cart and create items
	cart.forEach((item, index) => {
		if (item !== undefined) {
			let htmlTemplate = `
                <div class="miniCartItem">
                       <img
                        class="miniCartProductImage"
                        src="${item.image}"
                        alt="${item.name}"/>
                         <div class="cartNameAndQty">
                           <h3 class="cartProductName">${item.name}</h3>
                                        <div class="miniCartQuantityContainer">
                                            <p>QTY:</p><p class="miniCartItemQty">${item.quantity}</p>
                                        </div>
                                </div>
                                <p class="miniCartPrice">$${item.price}</p>
                            </div>
                            </div>`;

			cartItmes.insertAdjacentHTML("beforeend", htmlTemplate);
		}
	});

	updateCheckoutSubtotal();

	function updateCheckoutSubtotal() {
		let checkoutItemContainer = document.getElementById(
			"miniCartItems"
		);
		let checkoutItems = checkoutItemContainer.getElementsByClassName(
			"miniCartItem"
		);
		let total = 0;
		let totalItems = 0;
		let roundedTotal = 0;
		let tax = 0;
		let roundedTax = 0;
		let totalWithTax = 0;
		let roundedTotalWithTax = 0;

		// Loop through parent containers looking for price and quantity
		for (let i = 0; i < checkoutItems.length; i++) {
			let checkoutItem = checkoutItems[i];
			let priceElement = checkoutItem.getElementsByClassName(
				"miniCartPrice"
			)[0];

			let quantityElement = checkoutItem.getElementsByClassName(
				"miniCartItemQty"
			)[0];
			console.log(quantityElement);

			// Removing the $ to make string an integer
			let price = parseFloat(
				priceElement.innerText.replace("$", "")
			);

			// Collecting all input values and setting a total amount of items
			let quantity = parseInt(quantityElement.innerText);
			totalItems = parseInt(totalItems) + parseInt(quantity);

			console.log(quantity, totalItems, price);

			// Collecting all input values and setting a total amount of items
			total = total + price * quantity;
			roundedTotal = total.toFixed(2);

			// Calculating Tax
			tax = roundedTotal * 0.06;
			roundedTax = tax.toFixed(2);

			// Calculating Total With Tax
			totalWithTax = roundedTotal * 1.06;
			roundedTotalWithTax = totalWithTax.toFixed(2);
		}

		// Replacing the HTML to hold the new total price
		let subtotal = document.getElementById("subtotalValue");
		subtotal.innerText = "$" + roundedTotal;

		let taxValue = document.getElementById("taxValue");
		taxValue.innerText = "$" + roundedTax;

		let totalValue = document.getElementById("totalValue");
		totalValue.innerText = "$" + roundedTotalWithTax;
	}

	// End here
})();
