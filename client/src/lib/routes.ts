export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  LOGIN: "/login",
  PRODUCT_DETAIL: (id: string | number) => `/products/${id}`,
} as const;

export const QUERY_PARAMS = {
  CATEGORY: "category",
  SORT: "sort",
} as const;

export const ROUTE_DEFAULTS = {
  DEFAULT_CATEGORY: "all",
} as const;
