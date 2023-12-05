const appContainer = document.getElementById("app");

document.getElementById("prodName").focus();

const productsFormEle = document.getElementById("storeProductForm");

productsFormEle.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = {};

	formData["prodName"] = e.target.elements["prodName"].value;
	formData["quantity"] = e.target.elements["quantity"].value;
	formData["price"] = e.target.elements["price"].value;
	formData["discountPercentage"] =
		e.target.elements["discountPercentage"].value;
	formData["productImage"] = e.target.elements["productImage"].value;

	alert(JSON.stringify(formData));
	console.log(JSON.stringify(formData));
});

//Ways to store user or form data at the backend
/**
 * 1. Local Storage
 * 2. Local file
 * 3. Cloud storage
 * 4. excel file
 * 5. sql server base
 * 6. etc
 */
