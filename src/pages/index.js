// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionFour from "../components/post/PostSectionFour";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import PostSectionTwo from "../components/post/PostSectionTwo";
import PostSectionOne from "../components/post/PostSectionOne";

import SliderTwo from "../components/slider/SliderTwo";

const Home = () => {
  return (
    <div suppressHydrationWarning>
      <HeadMeta metaTitle="The Business Masters" />
      <HeaderOne />
      <SliderTwo />
      <PostSectionFour />
      <PostSectionOne />
      <PostSectionTwo />
      <PostSectionThree />
      <PostSectionFive />
      <PostSectionSix />
      <FooterOne />
      {/* <ReactQueryDevtools/> */}
    </div>
  );
};

export default Home;
