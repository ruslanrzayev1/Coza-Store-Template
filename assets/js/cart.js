let cartProdsCnt = document.querySelector(".cartProdsCnt");

const displayCart = () => {
  cartProdsCnt.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    let cartProds = document.createElement("div");
    cartProds.className = "cartProds";
    cartProds.innerHTML = `
    <img src="${item.image}" alt="" />
              <h2>${item.name}</h2>
              <span>${item.price}</span>
              <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartProdsCnt.append(cartProds);
  });
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
};

window.onload = () => {
  displayCart();
};

