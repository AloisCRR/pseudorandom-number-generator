export function mitadPalabras(p1, p2) {
  let p1m = Math.trunc(p1.toString().length / 2);
  let p2m = Math.trunc(p2.toString().length / 2);

  return parseInt(p1m - p2m);
}

export function mitadPalabra(p1) {
  let p1m = Math.trunc(p1.toString().length / 2);

  return parseInt(p1m);
}

export function medio(rn, rn2, mitad) {
  return rn.toString().length % 2 != 0 && rn2.length % 2 == 0
    ? rn2.substr(mitad - 1, rn.toString().length)
    : rn2.substr(mitad, rn.toString().length);
}

export function wipeTable() {
  const tbody = $("#tableBody");
  const ntbody = document.createElement("tbody");
  ntbody.id = "tableBody";
  ntbody.className = "text-center";

  tbody.parentNode.replaceChild(ntbody, tbody);
}

export function newCell(row, content, pos) {
  let cell = row.insertCell(pos);
  cell.classList.add("py-3");
  let text = document.createTextNode(content);
  cell.appendChild(text);
}

export function $(selector) {
  return document.querySelector(selector);
}

export function removeLeftZeros(palabra, medio) {
  let rlz = palabra.substring(0, medio);

  rlz = rlz.replace(/^0+/, "") + palabra.substring(medio, palabra.length);

  return rlz;
}

export function mismaLongitud(n1, n2) {
  if (n1.toString().length == n2.toString().length) {
    return true;
  }

  return false;
}
