import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import FaqView from "./views/FaqView";


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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
