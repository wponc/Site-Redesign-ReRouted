import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("Work", "routes/Work.tsx"),
  route("Personal", "routes/Personal.tsx"),
  route("Writing", "routes/Writing.tsx"),
] satisfies RouteConfig;
