import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import FaqView from "./views/FaqView";
import NotFound from "./views/404";
import CryptoView from "./views/CryptoView";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView,
    },
    {
        path: "/faq",
        name: "Faq",
        component: FaqView,
    },
    {
        path: "/:pathMatch(.*)*",
        name:"notFound",
        component: NotFound,
    },
    {
        path: "/crypto",
        name: "Crypto",
        component: CryptoView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
