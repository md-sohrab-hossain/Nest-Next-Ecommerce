"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { QUERY_PARAMS } from "@/lib/routes";
import { updateUrlQuery } from "@/lib/url";

type SortOption = "newest" | "oldest" | "asc" | "desc";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "asc", label: "Price: Low to High" },
  { value: "desc", label: "Price: High to Low" },
];

let FilterValue = "newest";

const Filter = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  if (searchParams.get(QUERY_PARAMS.SORT)) {
    FilterValue = searchParams.get(QUERY_PARAMS.SORT) as SortOption;
  }

  const handleFilter = (value: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const newUrl = updateUrlQuery(
      currentParams,
      QUERY_PARAMS.SORT,
      value,
      pathName,
    );
    router.replace(newUrl);
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <label htmlFor={QUERY_PARAMS.SORT} className="font-medium">
        Sort By:
      </label>
      <select
        id={QUERY_PARAMS.SORT}
        name={QUERY_PARAMS.SORT}
        value={FilterValue}
        onChange={(e) => handleFilter(e.target.value)}
        className="ring-1 ring-gray-200 shadow-md rounded-sm px-2 py-1 text-gray-700 bg-white cursor-pointer disabled:opacity-50"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
