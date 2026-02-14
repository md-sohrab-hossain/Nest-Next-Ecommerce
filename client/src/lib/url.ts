import qs from "query-string";

const DEFAULT_BASE_URL = "/";

export const updateUrlQuery = (
  params: string | Record<string, any>,
  key: string,
  value: string | null,
  baseUrl = DEFAULT_BASE_URL,
) => {
  const currentQuery = typeof params === "string" ? qs.parse(params) : params;

  const newQuery = {
    ...currentQuery,
    [key]: value,
  };

  return qs.stringifyUrl({ url: baseUrl, query: newQuery }, { skipNull: true });
};

export const removeKeysFormUrlQuery = (
  params: string | Record<string, any>,
  keysToRemove: string[],
  baseUrl = DEFAULT_BASE_URL,
) => {
  const currentQuery = typeof params === "string" ? qs.parse(params) : params;

  const newQuery = { ...currentQuery };
  keysToRemove.forEach((key) => {
    delete newQuery[key];
  });

  return qs.stringifyUrl({ url: baseUrl, query: newQuery }, { skipNull: true });
};
