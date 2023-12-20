let nameinp = document.getElementById("nameinp");
let surnameinp = document.getElementById("surnameinp");
let ageinp = document.getElementById("ageinp");
let emailinp = document.getElementById("emailinp");
let form = document.getElementById("form");

const accountCreate = (event) => {
  event.preventDefault();
  axios.post("https://655c83c825b76d9884fd6f17.mockapi.io/basket", {
    name: nameinp.value,
    surname: surnameinp.value,
    email: ageinp.value,
    age: emailinp.value,
  });
};

form.addEventListener("submit", accountCreate);
