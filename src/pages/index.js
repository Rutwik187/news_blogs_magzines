// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HeadMeta from "../components/elements/HeadMeta";
// import FooterOne from "../components/footer/FooterOne";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderOne from "../components/header/HeaderOne";
import MasterTalks from "../components/post/MasterTalks";
import Magazines from "../components/post/Magazines";
import BusinessBulletin from "../components/post/BusinessBulletin";
import BlogAndArticle from "../components/post/BlogAndArticle";
import WebProfile from "../components/post/WebProfile";

import SliderOne from "../components/slider/SliderOne";
import MarketNews from "../components/post/MarketNews";

const Home = () => {
  return (
    <div suppressHydrationWarning>
      <HeadMeta metaTitle="The Business Masters" />
      <HeaderOne />
      <SliderOne />
      <WebProfile />
      <MarketNews />
      <BlogAndArticle />
      <BusinessBulletin />
      <MasterTalks />
      <Magazines />
      {/* <FooterOne /> */}
      <FooterTwo />
      {/* <ReactQueryDevtools/> */}
    </div>
  );
};

export default Home;
