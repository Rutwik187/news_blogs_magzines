import { useRouter } from "next/router";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import FooterTwo from "../../components/footer/FooterTwo";
import Loader from "../../components/common/Loader";
import { client } from "../../client";

const PostDetails = ({ postData, error }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  if (!postData) {
    return <div>No data found</div>;
  }

  return (
    <>
      <HeadMeta metaTitle="Post Details" />
      <HeaderOne />
      <PostFormatText postData={postData} />
      <Magazines />
      <FooterTwo />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const postQuery = `*[_type == "post" && slug.current == '${slug}'][0] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body
  }`;

  try {
    console.log(`Fetching data for slug: ${slug}`); // Logging the slug
    const postData = await client.fetch(postQuery);
    console.log("Fetched data:", postData); // Logging the fetched data

    if (!postData) {
      console.log("No data found for slug:", slug);
      return {
        notFound: true,
      };
    }

    return {
      props: { postData },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message); // Logging the error
    return {
      props: { error: { message: error.message } },
    };
  }
}

export default PostDetails;
