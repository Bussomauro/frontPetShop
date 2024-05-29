// Función para abrir la ventana modal de inicio de sesión
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }

  // Función para abrir la ventana modal de registro
  function openSignUpModal() {
    document.getElementById("signUpModal").style.display = "block";
  }

  // Función para cerrar la ventana modal
  function closeModal(event) {
    var modal = event.target.parentElement;
    modal.style.display = "none";
  }
