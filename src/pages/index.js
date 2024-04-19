// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HeadMeta from "../components/elements/HeadMeta";
// import FooterOne from "../components/footer/FooterOne";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
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
      <MarketNews />
      <WebProfile />
      <BlogAndArticle />
      {/*  <PostSectionThree />
      <PostSectionFive />
      <PostSectionSix /> */}
      {/* <FooterOne /> */}
      <FooterTwo />
      {/* <ReactQueryDevtools/> */}
    </div>
  );
};

export default Home;
