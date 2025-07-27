import CTA from '../components/CTA';
import Donation_Items from '../components/Donation_Items';
import Header_main from '../components/Header_main';
import Trade_items from '../components/Trade_Items';

function Home_page() {
  return (
    <>
      <Header_main />
      <Trade_items />
      <Donation_Items />
      <CTA />
      {/* <div className="flex items-center justify-center flex-col my-15 gap-5">
      </div>
      <Footer_main /> */}
    </>
  );
}

export default Home_page;
