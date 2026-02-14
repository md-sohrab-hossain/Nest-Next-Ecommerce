export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  LOGIN: "/login",
  CART: "/cart",
  PRODUCT_DETAIL: (id: string | number) => `/products/${id}`,
} as const;

export const QUERY_PARAMS = {
  CATEGORY: "category",
  SORT: "sort",
  STEP: "step",
} as const;

export const ROUTE_DEFAULTS = {
  DEFAULT_CATEGORY: "all",
  DEFAULT_STEP: "1",
} as const;
