(function () {
	if (document.readyState == "loading") {
		document.addEventListener("DOMContentLoaded", ready);
	} else {
		ready();
	}

	function ready() {
		// targeting all remove buttons
		let removeCartItemButtons = document.querySelectorAll(".remove");

		// looping through remove buttons and deleting the parent container when clicked
		for (let i = 0; i < removeCartItemButtons.length; i++) {
			let button = removeCartItemButtons[i];
			button.addEventListener("click", removeCartItem);
		}
		// targeting all quantity inputs
		let quantity = document.getElementsByClassName("cartItemQuantity");

		// looping through quantity inputs to account for quantity changes in the cart
		for (let i = 0; i < quantity.length; i++) {
			let input = quantity[i];
			input.addEventListener("change", quantityChanged);
		}
	}
	// removes the item's parent div when "remove" is clicked, and then update the cart total immediately
	function removeCartItem(event) {
		let buttonClicked = event.target;
		buttonClicked.parentElement.remove();
		updateCartTotal();
	}

	// makes sure the quantities changed are always a number and never a negative value
	function quantityChanged(event) {
		let input = event.target;
		if (isNaN(input.value) || input.value <= 0) {
			input.value = 1;
		}
		updateCartTotal();
	}
	// Updating the number of items and Subtotal
	function updateCartTotal() {
		let cartItemContainer = document.getElementsByClassName(
			"cartContainer"
		)[0];
		let cartItems = cartItemContainer.getElementsByClassName(
			"cartItem"
		);
		let total = 0;
		let totalItems = 0;
		let roundedTotal = 0;
		// Loop through parent containers looking for price and quantity
		for (let i = 0; i < cartItems.length - 1; i++) {
			let cartItem = cartItems[i];
			let priceElement = cartItem.getElementsByClassName(
				"price"
			)[0];
			let quantityElement = cartItem.getElementsByClassName(
				"cartItemQuantity"
			)[0];
			// Removing the $ to make string an integer
			let price = parseFloat(
				priceElement.innerText.replace("$", "")
			);
			// Collecting all input values and setting a total amount of items
			let quantity = quantityElement.value;
			totalItems = parseInt(totalItems) + parseInt(quantity);

			// Collecting all input values and setting a total amount of items
			total = total + price * quantity;
			roundedTotal = total.toFixed(2);
			console.log(roundedTotal);
		}
		// Replacing the HTML to hold the new total amount of items
		let itemQty = document.getElementById("itemQty");
		itemQty.innerText = `${totalItems} items`;

		// Replacing the HTML to hold the new total price
		let subtotal = document.querySelector(".totalPrice");
		subtotal.innerText = "$" + roundedTotal;
		console.log(subtotal, totalItems);
	}

	updateCartTotal();
	// End here
})();
