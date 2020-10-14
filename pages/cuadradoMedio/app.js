import { mitadPalabra, newCell, wipeTable, $ } from "../../app.js";

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

  for (let i = 0; i < it; i++) {
    const row = tbody.insertRow();
    newCell(row, i, 0);
    newCell(row, n1, 1);
    newCell(row, Math.pow(n1, 2), 2);
    newCell(row, cuadradoMedio(n1), 3);
    newCell(row, cuadradoMedio(n1), 4);

    n1 = cuadradoMedio(n1);
  }
}

function cuadradoMedio(n) {
  let rn2 = Math.pow(n, 2).toString();

  // TODO Arreglar bug de los ceros

  let mrn2 =
    n.toString().length % 2 != 0 && rn2.length % 2 == 0
      ? rn2.substr(mitadPalabra(rn2, n) - 1, n.toString().length)
      : rn2.substr(mitadPalabra(rn2, n), n.toString().length);

  return mrn2;
}
