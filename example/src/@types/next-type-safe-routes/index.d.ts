// IMPORTANT! This file is autogenerated by the `type-safe-next-routes` 
// package. You should _not_ update these types manually...

declare module "next-type-safe-routes" {
  type Query = { [key: string]: any };
  export type TypeSafePage = { route: "/catch-all", path: string, query?: Query } | "/" | { route: "/", query?: Query } | { route: "/nested-catch-all/[dynamic]/slugs", path: string, params: { dynamic: string | number }, query?: Query } | "/optional-catch-all" | { route: "/optional-catch-all", path?: string, query?: Query } | { route: "/users/[userId]", params: { userId: string | number }, query?: Query } | "/users" | { route: "/users", query?: Query };
  export type TypeSafeApiRoute = "/api/mocks" | { route: "/api/mocks", query?: Query } | { route: "/api/users/[userId]", params: { userId: string | number }, query?: Query } | "/api/users" | { route: "/api/users", query?: Query };
  export const getPathname = (typeSafeUrl: TypeSafePage | TypeSafeApiRoute) => string;
  export const getRoute = (typeSafeUrl: TypeSafePage | TypeSafeApiRoute) => string;
}
