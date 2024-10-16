function renderLists() {
  const user_text = document.querySelector("input").value;
  let p = document.createElement("p");
  p.innerHTML = user_text;
  document.querySelector(".to-do-project").appendChild(p);
  document.querySelector("input").value = "";
}
