import { mitadPalabras, newCell, wipeTable, $, medio } from "../../app.js";

const form = $("#form");
const buttonClear = $("#clear");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let seed = $("#semilla").value;
  let it = $("#iteraciones").value;
  tableGen(seed, it);
});

buttonClear.addEventListener("click", () => {
  wipeTable();
  $("#semilla").focus();
});

function tableGen(seed, it) {
  wipeTable();

  const tbody = $("#tableBody");

  let n1 = seed;
  var r;
  var p;

  for (let i = 0; i < it; i++) {
    const row = tbody.insertRow();

    p = Math.pow(n1, 2);
    r = cuadradoMedio(n1, p);

    newCell(row, i, 0);
    newCell(row, n1, 1);
    newCell(row, p, 2);
    newCell(row, r, 3);
    newCell(row, r, 4);

    n1 = cuadradoMedio(n1, p);
  }
}

function cuadradoMedio(n, p) {
  let rn2 = p.toString();
  let m = mitadPalabras(rn2, n);

  return medio(n, rn2, m);
}
