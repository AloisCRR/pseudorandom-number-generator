export function mitadPalabra(p1, p2) {
  let p1m = Math.trunc(p1.toString().length / 2);
  let p2m = Math.trunc(p2.toString().length / 2);

  return parseInt(p1m - p2m);
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
