function obtenerTipoUsuario(rol) {
  let mensaje = "";

  switch (rol) {
    case "admin":
      mensaje = "Acceso total al sistema";
      break;

    case "editor":
      mensaje = "Puede editar contenidos";
      break;

    case "lector":
      mensaje = "Solo puede leer";
      break;

    case "invitado":
      mensaje = "Acceso limitado";
      break;

    case "superadmin":
      mensaje = "Acceso a todas las funcionalidades";
      break;

    default:
      mensaje = "Rol no reconocido";
  }

  return mensaje;
}
