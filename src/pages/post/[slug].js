import HeadMeta from "../../components/elements/HeadMeta";

import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import { client } from "../../client";
import FooterTwo from "../../components/footer/FooterTwo";

const PostDetails = ({ postContent }) => {
  return (
    <>
      <HeadMeta metaTitle="Post Details" />
      <HeaderOne />
      <PostFormatText postData={postContent} />
      <Magazines />
      <FooterTwo />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  const postQuery = `*[_type == "post" && slug.current == '${slug}'][0] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body
  }`;

  const postContent = await client.fetch(postQuery);

  return {
    props: {
      postContent,
    },
  };
};

export default PostDetails;
