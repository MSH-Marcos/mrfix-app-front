import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"
import RegisterComponent from "../views/register.vue"
import ServiceListComponent from "../views/serviceList.vue"
import OrdersComponent from "../views/orders.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/register",
            name: "register",
            component: RegisterComponent
        },
        {
            path: "/serviceList",
            name: "serviceList",
            component: ServiceListComponent
        },
        {
            path: "/orders",
            name: "orders",
            component: OrdersComponent
        }
    ]
})