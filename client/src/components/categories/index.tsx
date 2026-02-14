import React from "react";
import { categories } from "@/constant";
import CategoryItem from "./CategoryItem";
import { updateUrlQuery, removeKeysFormUrlQuery } from "@/lib/url";

const KEY = "category";
const DEFAULT_CATEGORY = "all";

const Categories = ({ searchParams }: RouteParams) => {
  const selectedCategory = searchParams[KEY] || DEFAULT_CATEGORY;

  return (
    <div
      aria-label="Product categories"
      className="w-full bg-gray-100 p-2 rounded-xl mb-6 shadow-inner"
    >
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.slug;

          const href =
            category.slug === DEFAULT_CATEGORY
              ? removeKeysFormUrlQuery(searchParams, [KEY])
              : updateUrlQuery(searchParams, KEY, category.slug);

          return (
            <CategoryItem
              key={category.slug}
              name={category.name}
              icon={category.icon}
              slug={category.slug}
              isSelected={isSelected}
              href={href}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
