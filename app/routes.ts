import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/menu", "routes/menu/Menu.tsx"),
    route("/sinistro", "routes/sinistro/Sinistro.tsx"),
    route("/cadastrar", "routes/createUser/CreateUsers.tsx"),
    route("/cadastrar/register-user", "routes/createUser/registerUser/RegisterUser.tsx"),
    route("/dashboard", "routes/dashboard/Dashboard.tsx"),

] satisfies RouteConfig;
