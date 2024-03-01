import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import PostSectionFive from "../components/post/PostSectionFive";
import PostSectionFour from "../components/post/PostSectionFour";
import PostSectionOne from "../components/post/PostSectionOne";
import PostSectionSix from "../components/post/PostSectionSix";
import PostSectionThree from "../components/post/PostSectionThree";
import PostSectionTwo from "../components/post/PostSectionTwo";
import Category from '../components/category/Categories';
import Categories from '../components/category/Categories';
import SliderTwo from '../components/slider/SliderTwo';

const HomeOne = ({allPosts}) => {
 
  return ( 
    <>
    <HeadMeta metaTitle="Home One"/>
    <HeaderOne />
    <SliderTwo slidePost={allPosts} />
  <Categories/>
    <PostSectionTwo postData={allPosts} />
    <PostSectionThree postData={allPosts} />
    <PostSectionFour postData={allPosts} />
    <PostSectionFive postData={allPosts} adBanner={true} />
    <PostSectionSix postData={allPosts}/>
    <FooterOne />
    <ReactQueryDevtools initialIsOpen />
   </>
   );
}
 
export default HomeOne;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'trending',
    'story',
    'slug',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'date',
    'post_views',
    'post_share',
  ])
  
  return {
    props: { allPosts }
  }
}

