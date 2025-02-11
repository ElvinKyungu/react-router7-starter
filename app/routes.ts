import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("methodologies", "./routes/methodologies.tsx"),
  route("objectifs", "./routes/objectives.tsx"),
  route("prerequis", "./routes/prerequisites.tsx"),
  route("services", "./routes/services.tsx"),
  route("contact", "./routes/contact.tsx"),
] satisfies RouteConfig;
