import iconeUser from "../assets/images/icone_user.png"; // ajuste o caminho se necessário

function IconeUsuario() {
  return (
    <img
      src={iconeUser}
      alt="ícone do usuário"
      className="w-12 h-12 object-contain"
    />
  );
}

export default IconeUsuario;
