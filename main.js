import "./style.css";

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const clickOrderList = document.getElementById("clickOrder");
let clickOrder = [];

function updateURL() {
  const checkedIds = clickOrder.join(",");
  const newUrl = `${window.location.origin}${window.location.pathname}?checked=${checkedIds}`;
  window.history.pushState({}, "", newUrl);
}

function updateClickOrderList() {
  clickOrderList.innerHTML = "";
  for (let i = 0; i < clickOrder.length; i++) {
    const id = clickOrder[i];
    const li = document.createElement("li");
    li.textContent = id;
    clickOrderList.appendChild(li);
  }
}

function handleCheckboxClick(event) {
  const checkboxId = event.target.id;
  if (event.target.checked && !clickOrder.includes(checkboxId)) {
    clickOrder.push(checkboxId);
  } else {
    clickOrder = clickOrder.filter((id) => id !== checkboxId);
  }
  updateURL();
  updateClickOrderList();
}

function restoreFromURL() {
  const params = new URLSearchParams(window.location.search);
  const checkedIds = params.get("checked");
  if (checkedIds) {
    clickOrder = checkedIds.split(",");
    for (let i = 0; i < checkboxes.length; i++) {
      const cb = checkboxes[i];
      if (clickOrder.includes(cb.id)) {
        cb.checked = true;
      }
    }
    updateClickOrderList();
  }
}

document.getElementById("copyLink").addEventListener("click", () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("Данные скопированы!");
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckboxClick);
});

restoreFromURL();
