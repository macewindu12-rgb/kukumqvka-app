const btn = document.getElementById("checkBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  result.hidden = false;
  btn.disabled = true;
  btn.textContent = "Проверено ✅";
});
