const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let seed = document.getElementById("semilla").value;
  let it = document.getElementById("iteraciones").value;
  console.log(seed, it);
});
