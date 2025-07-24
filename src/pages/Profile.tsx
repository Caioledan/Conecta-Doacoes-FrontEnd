import Footer_Profile from "../components/Footer_Profile";
import Header_pages from "../components/Header_pages";
import Card_Profile from "../components/Card_profile";
function Profile() {
  return (
    <div className="flex flex-col min-h-screen font-epilogue">
      <Header_pages />
      <div className="flex justify-center items-start py-8">
        <Card_Profile />
        <Card_Profile />
      </div>
      <Footer_Profile />
    </div>
  );
}

export default Profile;
