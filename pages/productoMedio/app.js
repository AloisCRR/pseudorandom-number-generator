import {
  mitadPalabras,
  newCell,
  wipeTable,
  $,
  medio,
  mismaLongitud,
} from "../../app.js";

const form = $("#form");
const buttonClear = $("#clear");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let seed1 = $("#semilla1").value;
  let seed2 = $("#semilla2").value;

  if (!mismaLongitud(seed1, seed2)) {
    alert("Ambos números deben tener la misma longitud");
    location.reload();
    return;
  }

  let it = $("#iteraciones").value;
  tableGen(seed1, seed2, it);
});

buttonClear.addEventListener("click", () => {
  wipeTable();
  $("#semilla1").focus();
});

function tableGen(seed1, seed2, it) {
  wipeTable();

  const tbody = $("#tableBody");

  let n1 = seed1;
  let n2 = seed2;
  var r;

  for (let i = 0; i < it; i++) {
    const row = tbody.insertRow();
    r = productoMedio(n1, n2);

    newCell(row, i, 0);
    newCell(row, n1, 1);
    newCell(row, n2, 2);
    newCell(row, n1 * n2, 3);
    newCell(row, r, 4);
    newCell(row, r, 5);

    n1 = n2;
    n2 = r;
  }
}

function productoMedio(n1, n2) {
  let rn2 = (n1 * n2).toString();
  let m = mitadPalabras(rn2, n1);

  return medio(n1, rn2, m);
}
