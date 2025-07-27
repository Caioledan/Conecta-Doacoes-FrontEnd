import Footer_Profile from "../components/Footer_Profile";
import Header_pages from "../components/Header_profile";
import Form_Cadastrar_item from "../components/Form_Cadastrar_item";
import Card_profile from "../components/Card_profile";

function Cadastro_page() {
  return (
    <div className="flex flex-col min-h-screen font-epilogue">
      <Header_pages />
      <div className="flex justify-center flex-col lg:flex-row gap-8 px-4 lg:px-16 py-8">
        <Card_profile />
        <Form_Cadastrar_item />
      </div>
      <Footer_Profile />
    </div>
  );
}

export default Cadastro_page;
