import { useQuery } from "@tanstack/react-query";

import Link from "next/link";
import { client } from "../../client";
import PostList from "./PostList";
import SectionTitle from "../elements/SectionTitle";

const Categories = () => {
  const { isLoading: categoriesLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const query = `*[_type == 'category'] { title, _id }`;
      return await client.fetch(query);
    },
  });

  const fetchPostsByCategory = async (categoryId) => {
    const query = `*[_type == 'post' && count(categories[_ref == $categoryId]) > 0] | order(publishedAt desc) {
                      ...,
                      category-> { title }
                    }`;
    return await client.fetch(query, { categoryId });
  };

  if (categoriesLoading) return <div>Loading categories...</div>;

  return (
    <div className="section-gap section-gap-top__with-text trending-stories ">
      <div className="container">
        {categories.map((category) => (
          <div className="container mt-6">
            <SectionTitle
              title={category.title}
              btnText={`all ${category.title} posts`}
              key={category._id}
            />

            <div className="col-lg-6">
              <PostList categoryId={category._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
