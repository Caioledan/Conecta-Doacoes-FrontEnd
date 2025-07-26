import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const navigate = useNavigate();
  const {
    credentials,
    isLoading,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSubmit(e);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="flex ml-30 items-center font-epilogue">
      <div className="flex flex-col justify-center border h-2/3 w-150 p-6 gap-6">
        <h1 className="text-xl">Login</h1>

        <form
          onSubmit={handleLoginSubmit}
          className="flex flex-col gap-5 w-2/3"
        >
          <input
            type="text"
            placeholder="E-mail ou usuário"
            className="border rounded-md px-2 py-1"
            value={credentials.username}
            onChange={handleUsernameChange}
            disabled={isLoading}
          />

          <input
            type="password"
            placeholder="Senha"
            className="border rounded-md px-2 py-1"
            value={credentials.password}
            onChange={handlePasswordChange}
            disabled={isLoading}
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="border rounded-xl w-max px-4 py-1 bg-dark-green text-white cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Entrar"}
          </button>
        </form>

        <ul className="flex space-x-2">
          <a href="#" className="text-blue-500">
            <li>Esqueceu sua senha?</li>
          </a>
          <li>|</li>
          <a href="/cadastro" className="text-blue-500">
            <li>Ainda não é registrado?</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Login;
