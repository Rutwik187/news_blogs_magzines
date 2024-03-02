import HeadMeta from "../../components/elements/HeadMeta";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import PostSectionSix from "../../components/post/PostSectionSix";
import { client } from "../../client"; 




// Static Generation with Pre-rendering (recommended for most cases)
export async function getStaticPaths() {
  const allSlugsQuery = `*[_type == "post"]{ 'slug': slug.current }`; // Removed condition here
  const slugs = await client.fetch(allSlugsQuery);

  const paths = slugs.map((slug) => ({ params: { slug: slug.slug } }));

  return {
    paths,
    fallback: 'blocking' // Or false, refer to Next.js docs
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postContent = await client.fetch(`*[_type == "post" && slug.current == '${slug}'][0]`);
  const allPosts = await client.fetch(`*[_type == "post"]`); // Fetch all posts

  return {
    props: {
      postContent,
      allPosts
    },
    // Add revalidate if required
  };
}

const PostDetails = ({postContent, allPosts}) => {

  console.log("postContent", postContent); 

  return ( 
    <>
      <HeadMeta metaTitle="Post Details"/>
      <HeaderOne />
      <PostFormatText postData={postContent}/>
      <PostSectionSix postData={allPosts} />
      <FooterOne />
    </>
  );
}

export default PostDetails;
