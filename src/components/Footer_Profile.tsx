function Footer_Profile() {
  return (
    <div className="bg-gray-700 font-epilogue text-white flex justify-around h-50 items-center gap-50">
      <img
        src="src\assets\images\logo_footer_pages.png"
        alt=""
        className="h-20"
      />
      <div className="flex space-x-10 w-100">
        <ul className="flex flex-col gap-6">
          <a href="">
            <li>Sobre Nós</li>
          </a>
          <li>contato@sconecta.com</li>
        </ul>
        <ul className="flex flex-col gap-6">
          <a href="">
            <li>FAQ's</li>
          </a>
          <li>(505)555-0125</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-5">
        <p>Newsletter</p>
        <input
          type="email"
          placeholder="Insira seu e-mail aqui"
          className="focus:outline-none"
        />
      </div>
    </div>
  );
}

export default Footer_Profile;
