import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import BookListPage from '@/pages/BookListPage.vue'
import AddBook from '@/pages/AddBook.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', component : Home},
        {path : '/add', component : AddBook},
        {path : '/list', component : BookListPage},
    ]
});

export default router;