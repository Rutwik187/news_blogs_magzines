import HeadMeta from "../../components/elements/HeadMeta";

import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import { client } from "../../client";
import FooterTwo from "../../components/footer/FooterTwo";

// Static Generation with Pre-rendering (recommended for most cases)
// export async function getStaticPaths() {
//   const allSlugsQuery = `*[_type == "post"]{ 'slug': slug.current }`; // Removed condition here
//   const slugs = await client.fetch(allSlugsQuery);

//   const paths = slugs.map((slug) => ({ params: { slug: slug.slug } }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const postContent = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}'][0]  {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body}
    `
  );
  const allPosts = await client.fetch(`*[_type == "post"]`);
  return {
    props: {
      postContent,
      allPosts,
    },
    revalidate: 60,
  };
}

const PostDetails = ({ postContent, allPosts }) => {
  return (
    <>
      <HeadMeta metaTitle="Post Details" />
      <HeaderOne />
      <PostFormatText postData={postContent} />
      <Magazines postData={allPosts} />
      <FooterTwo />
    </>
  );
};

export default PostDetails;
