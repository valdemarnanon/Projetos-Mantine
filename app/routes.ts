import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/calculadora", "./routes/calculadora/Calculadora.tsx"),
    route("/calculadoraGorjeta", "./routes/calculadoraGorjeta/CalculadoraGorjeta.tsx")


] satisfies RouteConfig;
