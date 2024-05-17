// "use client";
// import { useRouter } from "next/router";
// import { useQuery } from "@tanstack/react-query";
// import HeadMeta from "../../components/elements/HeadMeta";
// import HeaderOne from "../../components/header/HeaderOne";
// import PostFormatText from "../../components/post/post-format/PostFormatText";
// import Magazines from "../../components/post/Magazines";
// import FooterTwo from "../../components/footer/FooterTwo";
// import Loader from "../../components/common/Loader";
// import { client } from "../../client";

// const PostDetails = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const postQuery = slug
//     ? `*[_type == "post" && slug.current == '${slug}'][0] {
//         title,
//         slug,
//         'featureImg': mainImage.asset->url,
//         body
//       }`
//     : null;

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["currentPost", slug],
//     queryFn: async () => {
//       if (!postQuery) return null;
//       const response = await client.fetch(postQuery);
//       return response;
//     },
//     enabled: !!slug, // Ensure the query only runs when slug is defined
//   });

//   if (isLoading) return <Loader />;
//   if (error) return <div>Error fetching posts: {error.message}</div>;
//   if (!data) return <div>No data found</div>;

//   return (
//     <>
//       <HeadMeta metaTitle="Post Details" />
//       <HeaderOne />
//       <PostFormatText postData={data} />
//       <Magazines />
//       <FooterTwo />
//     </>
//   );
// };

// export default PostDetails;

import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import HeadMeta from "../../components/elements/HeadMeta";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import Magazines from "../../components/post/Magazines";
import FooterTwo from "../../components/footer/FooterTwo";
import Loader from "../../components/common/Loader";
import { client } from "../../client";

const PostDetails = ({ initialData }) => {
  const router = useRouter();
  const { slug } = router.query;

  const postQuery = slug
    ? `*[_type == "post" && slug.current == '${slug}'][0] {
        title,
        slug,
        'featureImg': mainImage.asset->url,
        body
      }`
    : null;

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentPost", slug],
    queryFn: async () => {
      if (!postQuery) return null;
      const response = await client.fetch(postQuery);
      return response;
    },
    initialData,
    enabled: !!slug, // Ensure the query only runs when slug is defined
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

// export async function getStaticPaths() {
//   const query = `*[_type == "post"]{ slug }`;
//   const posts = await client.fetch(query);

//   const paths = posts.map((post) => ({
//     params: { slug: post.slug.current },
//   }));

//   return { paths, fallback: "blocking" };
// }

export async function getserversideprops({ params }) {
  const query = `*[_type == "post" && slug.current == '${params.slug}'][0] {
    title,
    slug,
    'featureImg': mainImage.asset->url,
    body
  }`;
  const initialData = await client.fetch(query);

  return { props: { initialData } };
}

export default PostDetails;
