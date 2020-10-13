const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let seed = document.getElementById("semilla").value;
  let it = document.getElementById("iteraciones").value;
  tableGen(seed, it);
});

function tableGen(seed, it) {
  const tbody = document.getElementById("tableBody");

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

function newCell(row, content, pos) {
  let cell = row.insertCell(pos);
  cell.classList.add("py-3");
  let text = document.createTextNode(content);
  cell.appendChild(text);
}

function cuadradoMedio(n) {
  let rn2 = Math.pow(n, 2).toString();

  let mrn2 =
    n.toString().length % 2 != 0 && rn2.length % 2 == 0
      ? rn2.substr(mitadPalabra("0" + rn2, n) - 1, n.toString().length)
      : rn2.substr(mitadPalabra(rn2, n), n.toString().length);

  return mrn2;
}

function mitadPalabra(p1, p2) {
  let p1m = Math.trunc(p1.toString().length / 2);
  let p2m = Math.trunc(p2.toString().length / 2);

  return parseInt(p1m - p2m);
}
