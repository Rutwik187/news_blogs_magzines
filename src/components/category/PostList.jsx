import { useQuery } from "@tanstack/react-query";
import { client, urlFor } from "../../client";
import Post from "./Post";

const PostList = ({ categoryId }) => {
  const {
    isLoading,
    isError,
    data: posts,
  } = useQuery({
    queryKey: ["posts", categoryId],
    queryFn: async () => {
      const query = `*[_type == 'post' && count(categories[_ref == $categoryId]) > 0] | order(publishedAt desc) {
                      ...,
                      category-> { title }
                    }`;
      return await client.fetch(query, { categoryId });
    },
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>An error occurred...</div>;

  return (
    <>
      {posts?.slice(0, 4).map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </>
  );
};

export default PostList;
