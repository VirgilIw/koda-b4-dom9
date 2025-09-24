const btnSuhu = document.getElementById("btnSuhu");
const input = document.getElementById("input");
const table = document.querySelector("table");

function ceToK(c) {
  return c + 273.15;
}

function ceToR(c) {
  return (c * 4) / 5;
}

function ceToF(c) {
  return (c * 9) / 5 + 32;
}

btnSuhu.addEventListener("click", (event) => {
  event.preventDefault();
  const tr = document.createElement("tr");
  const inputUser = Number(input.value);

  if (!isNaN(inputUser)) {
    tr.innerHTML = `<td>${inputUser}</td>
      <td>${ceToK(inputUser)}</td>
      <td>${ceToF(inputUser)}</td>
      <td>${ceToR(inputUser)}</td>
      `;
  } else {
    alert("masukan angka bukan text");
    input.value = "";
    tr.innerHTML = "";
  }
  table.append(tr);
  const btnToast = document.getElementById("btnToast");

  btnToast.addEventListener("click", () => {
    Toastify({
      text: "Halo! Ini notifikasi Toastify 🚀",
      duration: 3000,
      gravity: "bottom", // "top" atau "bottom"
      position: "right", // "left", "center", "right"
      backgroundColor: "linear-gradient(to right, #ff6a00, #ee0979)",
      close: true,
    }).showToast();
  });
});
