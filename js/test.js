const closeModalWindow = (event) => {
  if (event.code === "Escape" && modalBox.visible() === true) {
    modalBox.close();
  }
};
const openModalWindow = () => {
  modalBox.show();
};

document.addEventListener("keydown", closeModalWindow);
document.removeEventListener("keydown", closeModalWindow);
