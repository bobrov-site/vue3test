import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    }
]

const router = VueRouter.createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router

