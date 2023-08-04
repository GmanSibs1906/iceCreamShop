

// Show the default product image on page load
window.onload = function () {
  showImage("mulberryImg");
};


// Rendering of product images
function showImage(imgClass) {
  // Hide all images first
  const allImages = document.querySelectorAll(".innerContainer");
  allImages.forEach((image) => {
    image.style.display = "none";
  });

  // Show the selected image
  const selectedImage = document.querySelector(`.${imgClass}`);
  selectedImage.style.display = "flex";
  selectedImage.style.justifyContent = "center";
  selectedImage.style.alignItems = "center";



  // DISPLAYING OF PRODUCT DETAILS

  // Show the corresponding text section for marlberry (Default Text)
  const marlberryText = document.querySelector(".marlberry");
  if (imgClass === "mulberryImg") {
    marlberryText.style.display = "flex";
  } else {
    marlberryText.style.display = "none";
  }

   // Show the corresponding text section for cherry
  const cherryText = document.querySelector(".cherry");
  if (imgClass === "cherryImg") {
    cherryText.style.display = "flex";
  } else {
    cherryText.style.display = "none";
  }

  // Show the corresponding text section for granadilla
  const granadillaText = document.querySelector(".granadilla");
  if (imgClass === "granadillaImg") {
    granadillaText.style.display = "flex";
  } else {
    granadillaText.style.display = "none";
  }

  // Show the corresponding text section for peach
  const peachText = document.querySelector(".peach");
  if (imgClass === "peachImg") {
    peachText.style.display = "flex";
  } else {
    peachText.style.display = "none";
  }

  // Show the corresponding text section for banana
  const bananaText = document.querySelector(".banana");
  if (imgClass === "bananaImg") {
    bananaText.style.display = "flex";
  } else {
    bananaText.style.display = "none";
  }
}



// add subtract product quantity - didnt use this function. i realised instructions required we use a input

// mulberry
document.addEventListener("DOMContentLoaded", function () {
  const mulberrySubtractBtn = document.querySelector(".mulberrySubBtn");
  const mulberryAddBtn = document.querySelector(".mulberryAddBtn");
  const mulberryQuantityInput = document.querySelector(
    ".mulberryQuantityInput"
  );

  mulberrySubtractBtn.addEventListener("click", function () {
    let currentValue = parseInt(mulberryQuantityInput.value, 10);
    if (currentValue > 0) {
      mulberryQuantityInput.value = currentValue - 1;
    }
  });

  mulberryAddBtn.addEventListener("click", function () {
    let currentValue = parseInt(mulberryQuantityInput.value, 10);
    mulberryQuantityInput.value = currentValue + 1;
  });
});

// cherry
document.addEventListener("DOMContentLoaded", function () {
  const cherrySubtractBtn = document.querySelector(".cherrySubBtn");
  const cherryAddBtn = document.querySelector(".cherryAddBtn");
  const cherryQuantityInput = document.querySelector(".cherryQuantityInput");

  cherrySubtractBtn.addEventListener("click", function () {
    let currentValue = parseInt(cherryQuantityInput.value, 10);
    if (currentValue > 0) {
      cherryQuantityInput.value = currentValue - 1;
    }
  });

  cherryAddBtn.addEventListener("click", function () {
    let currentValue = parseInt(cherryQuantityInput.value, 10);
    cherryQuantityInput.value = currentValue + 1;
  });
});

// peach
document.addEventListener("DOMContentLoaded", function () {
  const peachSubtractBtn = document.querySelector(".peachSubBtn");
  const peachAddBtn = document.querySelector(".peachAddBtn");
  const peachQuantityInput = document.querySelector(".peachQuantityInput");

  peachSubtractBtn.addEventListener("click", function () {
    let currentValue = parseInt(peachQuantityInput.value, 10);
    if (currentValue > 0) {
      peachQuantityInput.value = currentValue - 1;
    }
  });

  peachAddBtn.addEventListener("click", function () {
    let currentValue = parseInt(peachQuantityInput.value, 10);
    peachQuantityInput.value = currentValue + 1;
  });
});

// granadilla
document.addEventListener("DOMContentLoaded", function () {
  const granadillaSubtractBtn = document.querySelector(".granadillaSubBtn");
  const granadillaAddBtn = document.querySelector(".granadillaAddBtn");
  const granadillaQuantityInput = document.querySelector(
    ".granadillaQuantityInput"
  );

  granadillaSubtractBtn.addEventListener("click", function () {
    let currentValue = parseInt(granadillaQuantityInput.value, 10);
    if (currentValue > 0) {
      granadillaQuantityInput.value = currentValue - 1;
    }
  });

  granadillaAddBtn.addEventListener("click", function () {
    let currentValue = parseInt(granadillaQuantityInput.value, 10);
    granadillaQuantityInput.value = currentValue + 1;
  });
});

// banana
document.addEventListener("DOMContentLoaded", function () {
  const bananaSubtractBtn = document.querySelector(".bananaSubBtn");
  const bananaAddBtn = document.querySelector(".bananaAddBtn");
  const bananaQuantityInput = document.querySelector(".bananaQuantityInput");

  bananaSubtractBtn.addEventListener("click", function () {
    let currentValue = parseInt(bananaQuantityInput.value, 10);
    if (currentValue > 0) {
      bananaQuantityInput.value = currentValue - 1;
    }
  });

  bananaAddBtn.addEventListener("click", function () {
    let currentValue = parseInt(bananaQuantityInput.value, 10);
    bananaQuantityInput.value = currentValue + 1;
  });
});




// CART MODAL

const openModalBtn = document.getElementById("openModalBtn");
const modalBg = document.getElementById("modalBg");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modalBg.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modalBg.style.display = "none";
});

const scrollToTopBtn = document.getElementById("openModalBtn");

// Show the button when the user scrolls down 200 pixels from the top
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




// SHOPPING CART


// define cart
let cart = [];


// Reset product values after adding to cart
function resetProductValues(productId) {
  document.getElementById(`productName-${productId}`).textContent =
    "Melsoft Student";
  document
    .getElementById(`imageId-${productId}`)
    .setAttribute("src", "melsoft-image.jpg");
  document.getElementById(`productPrice-${productId}`).textContent = "0";
  document.getElementById(`productQuantity-${productId}`).value = "0";
}

// cart quantity display
renderCartItemCount();



// adding products to cart
function addToCart(productId) {
  // product name
  let productName = document.getElementById(
    `productName-${productId}`
  ).textContent;

  // product image
  let imageContainer = document.getElementById(`imageId-${productId}`);
  let image = imageContainer.getAttribute("src");

  // unit price
  let unitPriceContainer = document.getElementById(
    `productPrice-${productId}`
  ).textContent;
  let unitPrice = parseInt(unitPriceContainer);

  // quantity
  let quantityContainer = document.getElementById(
    `productQuantity-${productId}`
  ).value;
  let quantity = parseInt(quantityContainer);

  // create a product item with a unique productId
  let product = {
    productId: cart.length, //needed for updating the product quantity
    productName,
    image,
    unitPrice,
    quantity,
  };

  // check if the product is already in the cart
  const existingProductIndex = cart.findIndex(
    (item) => item.productId === product.productId
  );
  if (existingProductIndex !== -1) {
    // If the product is already in the cart, update its quantity
    cart[existingProductIndex].quantity += quantity;
  } else {
    // If the product is not in the cart, add it
    cart.push(product);
  }

  // Reset the form fields after adding to cart
  resetProductValues(productId);

  // Call the renderProductList function to display the products in the HTML
  renderProductList();

  renderCartItemCount();
}


// Function to increase the quantity of a product in the cart
function increaseQuantity(productId) {
  // find the product in the cart then increase quantity
  const productIndex = cart.findIndex(
    (product) => product.productId === productId
  );
  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
    renderProductList();
  }
  renderCartItemCount();
}

// Function to decrease the quantity of a product in the cart
function decreaseQuantity(productId) {
  // find the product in the cart then decrease quantity
  const productIndex = cart.findIndex(
    (product) => product.productId === productId
  );
  if (productIndex !== -1 && cart[productIndex].quantity > 0) {
    cart[productIndex].quantity -= 1;
    renderProductList();
  }
  renderCartItemCount();
}

// Delete product from cart
function removeFromCart(productId) {
  const productIndex = cart.findIndex(
    (product) => product.productId === productId
  );
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    renderProductList();
  }
  renderCartItemCount();
}

// calculation total price of products in cart
function calculateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.unitPrice * product.quantity;
  });
  return totalPrice;
}

// reseting the cart to empty
function clearCart() {
  cart = []; // Set the cart array to an empty array
  renderProductList(); // Update the display to show an empty cart
  renderCartItemCount();
}

// cart quantity display
function renderCartItemCount() {
  const cartItemCountElement = document.getElementById("cartItemCount");
  cartItemCountElement.textContent =
    cart.length === 0 ? "0" : cart.length.toString();
}

// Function to render the product list in HTML
function renderProductList() {
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = ""; // Clear the existing contents of productListElement

  // Loop through each product and create the HTML representation
  cart.forEach((product) => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${
      product.productName
    }" class="cartImage">
        <h6>${product.productName}</h6>
        <i onclick="increaseQuantity(${parseInt(
          product.productId
        )})" class="fa-solid fa-plus fa-xl addBtn mulberryAddBtn" style="color: #27c500;"></i>
        <div>${product.quantity}</div>
        <i onclick="decreaseQuantity(${parseInt(
          product.productId
        )})" class="fa-solid fa-minus fa-xl subtractBtn bananaSubBtn" style="color: #b21c3e;"></i>
        <div>R${product.unitPrice * product.quantity}.00</div>
        <i onclick="removeFromCart(${
          product.productId
        })" class="fa-solid fa-trash" style="color: #f90202;"></i>
      </div>
    `;

    // Append the product HTML to the productListElement
    productListElement.innerHTML += productHTML;
  });

  // Display the cart total price
  const totalElement = document.getElementById("cartTotal");
  totalElement.textContent = `Total Price: R${calculateTotalPrice()}.00`;
}
