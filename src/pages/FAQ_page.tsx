import Footer_Pages from "../components/Footer_Pages";
import Header_pages from "../components/Header_pages";

export default function FAQ_page() {
  return (
    <div className="min-h-screen bg-white font-epilogue">
      <Header_pages />
      <div className="flex justify-center h-130 items-center">
        <div className="space-y-6 w-2/3 ">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Como me cadastrar?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Clique no botão “Cadastrar”, informe seu nome, e-mail e crie uma
              senha. Você receberá um e-mail de confirmação para ativar sua conta.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Qualquer item pode ser doado?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sim, desde que esteja em boas condições, não seja proibido por lei e
              siga nossas regras de uso (nada de itens perigosos, ilegais ou fora
              das normas de higiene).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Preciso pagar algo?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Não, a plataforma é totalmente gratuita para doações e trocas.
              Eventuais custos de envio ficam a cargo dos usuários, caso optem por
              entregas à distância.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              É seguro para trocar informações?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sim. Seus dados são protegidos por criptografia e nunca são
              compartilhados com terceiros. Recomendamos conversar pela própria
              plataforma para manter sua privacidade.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Em caso de não receber o item, quem pode me ajudar?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Você pode abrir um chamado pelo suporte. Nossa equipe irá analisar o
              caso, mediar a comunicação entre doador e recebedor e, se
              necessário, aplicar medidas para manter a confiança na comunidade.
            </p>
          </div>
        </div>
      </div>
      <Footer_Pages />
    </div>
  );
}