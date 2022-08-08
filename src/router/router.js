import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main";
import PostPageWithStore from "@/pages/PostPageWithStore";
import About from "@/pages/About";
import PostPageId from "@/pages/PostPageId";
import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPageWithStore
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostPageId
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionAPI
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router

