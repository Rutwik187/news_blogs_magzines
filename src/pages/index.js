import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderOne from "../components/header/HeaderOne";
import MasterTalks from "../components/post/MasterTalks";
import Magazines from "../components/post/Magazines";
import BusinessBulletin from "../components/post/BusinessBulletin";

import SliderOne from "../components/slider/SliderOne";
import WebProfiles from "../components/post/WebProfiles";
import MarketNews from "../components/post/MarketNews";

const Home = () => {
  return (
    <div suppressHydrationWarning>
      <HeadMeta metaTitle="The Entrepreneurial Chronicles" />
      <HeaderOne />
      <SliderOne />
      <Magazines />
      <WebProfiles />
      {/* <WebProfiles2 /> */}
      <MarketNews />
      <BusinessBulletin />
      <MasterTalks />

      <FooterTwo />
    </div>
  );
};

export default Home;
