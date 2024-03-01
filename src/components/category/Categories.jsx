import { useQuery } from "@tanstack/react-query";

import Link from "next/link";
import { client } from "../../client";
import PostList from "./PostList";
import SectionTitle from "../elements/SectionTitle";

const Categories = () => {
  const { isLoading: categoriesLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const query = `*[_type == 'category']`;
      return await client.fetch(query);
    },
  });

  if (categoriesLoading) return <div>Loading categories...</div>;

  return (
    <div className="section-gap section-gap-top__with-text trending-stories ">
      <div className="container">
        {categories.map((category) => (
          <div className="container mt-6" key={category._id}>
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
