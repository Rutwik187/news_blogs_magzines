import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import FooterTwo from "../../components/footer/FooterTwo";
import Loader from "../../components/common/Loader";
import { client } from "../../client";

const fetchPostData = async (slug) => {
  const postQuery = `*[_type == "post" && slug.current == '${slug}'][0] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body
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
    enabled: !!slug, // Ensure the query only runs when slug is defined
    initialData,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts: {error.message}</div>;
  if (!postData) return <div>No data found</div>;

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

export default PostDetails;
