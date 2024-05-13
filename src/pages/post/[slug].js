"use client";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import { client } from "../../client";
import FooterTwo from "../../components/footer/FooterTwo";
import { useRouter } from "next/router";
import Loader from "../../components/common/Loader";
import { useQuery } from "@tanstack/react-query";

const PostDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  const postQuery = `*[_type == "post" && slug.current == '${slug}'][0] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body
  }`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["magazines"],
    queryFn: async () => {
      const response = await client.fetch(postQuery);
      return response;
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching posts</div>;

  if (!data) return null;

  console.log(data);
  return (
    <>
      <HeadMeta metaTitle="Post Details" />
      <HeaderOne />
      <PostFormatText postData={data} />
      <Magazines />
      {/* <FooterTwo /> */}
    </>
  );
};

export default PostDetails;
