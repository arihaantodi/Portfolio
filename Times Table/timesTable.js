function clearContainer() {
  document.querySelector(".container").innerHTML = "";
}

function renderTable() {
  clearContainer();
  const n = document.querySelector("input").value;
  for (let i = 1; i <= 12; i = i + 1) {
    const pTag = document.createElement("p");
    pTag.innerHTML = `${n} x ${i} = ${n * i}`;
    document.querySelector(".container").appendChild(pTag);
  }
}
