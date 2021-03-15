(function () {
	// Start here

	// function removeItem() {
	let container = document.getElementById("cartContainer");
	let remove = document.querySelector(".remove");

	remove.addEventListener("click", (event) => {
		for (let i = 0; i < container.children.length; i++) {
			// let removed = container.children[i]
			let buttonClicked = event.target;
			buttonClicked.parentElement.remove();
		}
	});

	// }
	// removeItem();
	// End here
})();
