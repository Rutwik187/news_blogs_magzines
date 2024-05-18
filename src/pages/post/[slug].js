import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import FooterTwo from "../../components/footer/FooterTwo";
import Loader from "../../components/common/Loader";
import { client } from "../../client";

const PostDetails = ({ postData }) => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentPost", slug],
    queryFn: async () => {
      const response = await client.fetch(postQuery);
      return response;
    },
    initialData: postData,
    enabled: !!slug,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <>
      <HeadMeta metaTitle="Post Details" />
      <HeaderOne />
      <PostFormatText postData={data} />
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

  const postData = await client.fetch(postQuery);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { postData },
  };
}

export default PostDetails;
