import CTA from '../components/CTA';
import Donation_Items from '../components/Donation_Items';
import Footer_main from '../components/Footer_main';
import Header_main from '../components/Header_main';
import Trade_items from '../components/Trade_Items';

function Home_page() {
  return (
    <>
      <Header_main />
      <Trade_items />
      <Donation_Items />
      <CTA />
      <Footer_main />
    </>
  );
}

export default Home_page;
