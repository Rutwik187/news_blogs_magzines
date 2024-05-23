import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import FooterTwo from "../../components/footer/FooterTwo";
import Loader from "../../components/common/Loader";
import { client } from "../../client";
import HeadMetaDynamic from "../../components/elements/HeadMetaDynamic";

const fetchPostData = async (slug) => {
  const postQuery = `*[_type == "post" && slug.current == '${slug}'][0] {
    title,
    altText,
    slug,
    'featureImg': mainImage.asset->url,
    body,
    description 
  }`;
  const postData = await client.fetch(postQuery);
  return postData;
};

const PostDetails = ({ initialData }) => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: postData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentPost", slug],
    queryFn: () => fetchPostData(slug),
    enabled: !!slug,
    initialData,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching post: {error.message}</div>;
  if (!postData) return <div>No data found</div>;

  return (
    <>
      <HeadMetaDynamic metaData={postData} />
      <HeaderOne />
      <PostFormatText postData={postData} />
      <Magazines />
      <FooterTwo />
    </>
  );
};

export default PostDetails;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const initialData = await fetchPostData(slug);

  return {
    props: {
      initialData,
    },
  };
}
