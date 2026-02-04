import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
//   index("./home.tsx"),
//   route("about", "./about.tsx"),

  route("/", "./home.tsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
  ]),
] satisfies RouteConfig;
