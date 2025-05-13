//import path from 'path'
import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/HomePage.vue";
import blogPost from "./components/blogPost.vue";
Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
          path: "/",
          name: "home",
          component: HomePage
        },  
        {
            path: "/blog",
            name: "blog",
            component:() => import("./components/blogPost.vue")
        },
    ]
})
export default router;