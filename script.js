function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
  document.getElementById("sidebarClose").classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
  document.getElementById("sidebarClose").classList.remove("active");
}

function closeAllModals() {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => modal.classList.remove("active"));
  document.getElementById("sidebarClose").classList.remove("active");
}

function handleForm(modalId) {
  alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია❤️✅");
  closeModal(modalId);
  return false;
}
