import React from "react";
import CategoryItem from "./CategoryItem";
import { categories as categoriesList } from "@/constant";
import { QUERY_PARAMS, ROUTE_DEFAULTS } from "@/lib/routes";
import { updateUrlQuery, removeKeysFormUrlQuery } from "@/lib/url";

const KEY = QUERY_PARAMS.CATEGORY;
const DEFAULT_CATEGORY = ROUTE_DEFAULTS.DEFAULT_CATEGORY;

interface CategoriesProps {
  searchParams?: RouteParams["searchParams"];
  pathname?: string;
}

const Categories = async ({
  searchParams,
  pathname = "/",
}: CategoriesProps) => {
  const params = searchParams ? await searchParams : {};
  const selectedCategory = (params[KEY] as string) || DEFAULT_CATEGORY;

  return (
    <div
      aria-label="Product categories"
      className="w-full bg-gray-100 p-2 rounded-xl mb-6 shadow-inner"
    >
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {categoriesList.map((category) => {
          const isSelected = selectedCategory === category.slug;

          const href =
            category.slug === DEFAULT_CATEGORY
              ? removeKeysFormUrlQuery(params, [KEY], pathname)
              : updateUrlQuery(params, KEY, category.slug, pathname);

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
