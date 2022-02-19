import { createWebHistory, createRouter } from "vue-router";
import NotFound from "./views/404";
import MoviesView from "./views/MoviesView";
import FilmCard from "./views/FilmCardView";

const routes = [
    {
        path: "/",
        name:"Films",
        component: MoviesView,
    },
    {
        path: "/films/:id(\\d+)",
        name: "FilmCardView",
        component: FilmCard,
    },
    {
        path: "/:pathMatch(.*)*",
        name:"notFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
