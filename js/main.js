(function () {
  const avatar = document.getElementById("avatar");
  const modal = document.getElementById("qrModal");
  const close = document.getElementById("qrClose");
  if (!avatar || !modal || !close) return;

  function openModal() {
    modal.hidden = false;
    close.focus();
  }

  function closeModal() {
    modal.hidden = true;
    avatar.focus();
  }

  avatar.addEventListener("click", openModal);
  avatar.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  });

  close.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
})();
