import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"
import RegisterComponent from "../views/register.vue"
import ServiceListComponent from "../views/serviceList.vue"
import OrdersComponent from "../views/orders.vue"
import UserDetailsComponent from "../views/userDetails.vue"
import AdminServicesComponent from "../views/adminServices.vue"
import CreateServiceComponent from "../views/createService.vue"
import AdminOrdersComponent from "../views/adminOrders.vue"


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
        },
        {
            path: "/userDetails",
            name: "userDetails",
            component: UserDetailsComponent
        },
        {
            path: "/adminServices",
            name: "adminServices",
            component: AdminServicesComponent
        },
        {
            path: "/createService",
            name: "createService",
            component: CreateServiceComponent
        },
        {
            path: "/adminOrders",
            name: "adminOrders",
            component: AdminOrdersComponent
        }
    ]
})