import { createRouter, createWebHashHistory } from 'vue-router';
import UsersView from '../views/UsersView.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'users',
            component: UsersView
        },
        {
            path: '/users/:userId/posts',
            name: 'usersPost',
            // load on demand:
            component: () => import('../views/UserPostsView.vue'),
            props: true
        }
    ]
});

export default router;
