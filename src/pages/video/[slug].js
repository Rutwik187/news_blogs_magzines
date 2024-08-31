import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../client";
import Loader from "../../components/common/Loader";
import VideoDetailLayout from "../../components/post/post-format/VideoDetailLayout";
import HeadMetaDynamic from "../../components/elements/HeadMetaDynamic";
import HeaderOne from "../../components/header/HeaderOne";
import FooterTwo from "../../components/footer/FooterTwo";

const VideoDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const query = `
    *[_type == "youtubeVideo" && slug.current == $slug][0] {
      _id,
      title,
      body,
      videoUrl,
      "slug": slug.current
    }
  `;

  const allVideosQuery = `
    *[_type == "youtubeVideo"] {
      _id,
      title,
      videoUrl,
      "slug": slug.current
    }
  `;

  const {
    data: video,
    isLoading: videoLoading,
    error: videoError,
  } = useQuery({
    queryKey: ["video", slug],
    queryFn: async () => {
      const response = await client.fetch(query, { slug });
      return response;
    },
  });

  const {
    data: allVideos,
    isLoading: allVideosLoading,
    error: allVideosError,
  } = useQuery({
    queryKey: ["all-videos"],
    queryFn: async () => {
      const response = await client.fetch(allVideosQuery);
      return response;
    },
  });

  if (videoLoading || allVideosLoading) return <Loader />;
  if (videoError || allVideosError) return <div>Error fetching data</div>;

  if (!video) return <div>Video not found</div>;

  return (
    <>
      <HeadMetaDynamic metaData={allVideos} />
      <HeaderOne />
      <VideoDetailLayout videoData={video} allVideos={allVideos} />
      <FooterTwo />
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(`
    *[_type == "youtubeVideo" && defined(slug.current)][].slug.current
  `);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const video = await client.fetch(
    `
    *[_type == "youtubeVideo" && slug.current == $slug][0] {
      _id,
      title,
      body,
      videoUrl,
      "slug": slug.current
    }
  `,
    { slug: params.slug }
  );

  const allVideos = await client.fetch(`
    *[_type == "youtubeVideo"] {
      _id,
      title,
      videoUrl,
      "slug": slug.current
    }
  `);

  return {
    props: {
      video,
      allVideos,
    },
    revalidate: 60,
  };
}

export default VideoDetail;
