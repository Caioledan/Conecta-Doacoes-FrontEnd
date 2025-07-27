import Header from "../components/Header_profile";
import Card_profile from "../components/Card_profile";
import Footer from "../components/Footer_Profile";
import Button_cadastrar from "../components/Button_cadastrar";

export default function Profile_page() {

  return (
    <div className="min-h-screen bg-white font-epilogue">
      <Header />
      <main className="px-4 lg:px-16 py-8 flex justify-center items-center h-130">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="">
            <Card_profile />
            <Button_cadastrar />
          </div>

          
        </div>
      </main>

      <Footer />
    </div>
  );
}
